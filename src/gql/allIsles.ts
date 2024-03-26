import { Isola } from '@/app/gql/generated/graphql';
import { graphQLClient, gql } from './client';

const isola = gql`
  query Isola($nomeIsola: String!) {
    isola(where: { nome: $nomeIsola }) {
      nome
      short_descrizione
      foto {
        url
      }
      coordinate {
        latitude
        longitude
      }
      strutture {
        nome
        slug
        long_description
        foto {
          url
        }
        alloggi {
          descrizione
          nome
          id
          prezzi {
            ... on FasciaDiPrezzo {
              prezzo
              fascia {
                al
                nome
                dal
              }
            }
          }
          foto {
            url
          }
          postiLetto
        }
      }
    }
  }
`;

const allIsles = gql`
  query Isole {
    isole {
      nome
    }
  }
`;

const fetchAllIsles = () =>
  graphQLClient
    .request(allIsles)
    .then((data: any) => data.isole as Promise<Isola[]>);

const fetchIsola = (nomeIsola: string) =>
  graphQLClient
    .request(isola, { nomeIsola })
    .then((data: any) => data.isola as Promise<Isola>);

export { fetchIsola, fetchAllIsles };
