import { Struttura } from '.';
import { graphQLClient, gql } from './client';

const query = gql`
  query hp_recommendations {
    strutturas(where: { promuoviSuHomePage: true }) {
      nome
      foto {
        url
      }
      long_description
      isola {
        nome
      }
      alloggios {
        postiLetto
        prezzi {
          ... on FasciaDiPrezzo {
            prezzo
          }
        }
      }
    }
  }
`;

const fetchHpRecommendations = () =>
  graphQLClient
    .request(query)
    .then((data: any) => data.strutturas as Promise<Struttura[]>);

export { fetchHpRecommendations };
