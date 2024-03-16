import { Isle, IslesGroup } from '../types';
import { graphQLClient, gql } from './client';

const getIsleByName = (name?: string) => {
  const where = name ? `(where: {nome: {eq: "${name}"}})` : '';

  return gql`
    query {
      allIsola ${where} {
        edges {
          node {
            coordinate {
              formattedAddress
              latitude
              longitude
              zoom
            }
            nome
            short_description
            foto {
              ... on Asset {
                dominantColor
                src
              }
            }
          }
        }
        totalCount
      }
    }
  `;
};

const fetchAllIsles = () =>
  graphQLClient
    .request(getIsleByName())
    .then(
      (data: any) =>
        data.allIsola.edges.map((edge: any) => edge.node) as IslesGroup[],
    );

const fetchIsleByName = (name: string) =>
  graphQLClient
    .request(getIsleByName(name))
    .then((data: any) => data.allIsola.edges[0].node as Isle);

export { fetchAllIsles, fetchIsleByName };
