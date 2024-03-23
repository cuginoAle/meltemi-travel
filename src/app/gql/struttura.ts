import { Struttura } from '.';
import { graphQLClient, gql } from './client';

const query = (nomeIsola?: string) => {
  const where = nomeIsola ? `(where: {nome: "${nomeIsola}"})` : '';

  return gql`
  query strutturePerIsola {
    strutturas ${where} {
      alloggios(where: { promuoviSuHomePage: true }) {
        id
        postiLetto
        prezzi {
          ... on FasciaDiPrezzo {
            prezzo
          }
        }
      }
      nome
      foto {
        url
      }
      long_description
      isola {
        nome
      }
    }
  }
`;
};
const fetchStruttua = (nomeIsola: string) =>
  graphQLClient
    .request(query(nomeIsola))
    .then((data: any) => data.isola as Promise<Struttura[]>);

export { fetchStruttua };
