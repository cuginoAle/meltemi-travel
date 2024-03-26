import { Isola } from '.';
import { graphQLClient, gql } from './client';

const query = (nomeIsola?: string) => {
  const where = nomeIsola ? `(where: {nome: "${nomeIsola}"})` : '';

  return gql`
    query Isola {
      isola ${where} {
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
};

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
    .request(query(nomeIsola))
    .then((data: any) => data.isola as Promise<Isola>);

export { fetchIsola, fetchAllIsles };
