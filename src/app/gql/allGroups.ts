import { IslesGroup } from '../types';
import { graphQLClient, gql } from './client';

const query = gql`
  query {
    allGruppoDiIsole {
      edges {
        node {
          isole {
            ... on Isola {
              id
              nome
              foto {
                ... on Asset {
                  dominantColor
                  src
                }
              }
            }
          }
          nome
          foto {
            ... on Asset {
              blurHash
              dominantColor
              src
            }
          }
          short_description
        }
      }
    }
  }
`;

const fetchAllGroups = () =>
  graphQLClient
    .request(query)
    .then(
      (data: any) =>
        data.allGruppoDiIsole.edges.map(
          (edge: any) => edge.node,
        ) as IslesGroup[],
    );

export { fetchAllGroups };
