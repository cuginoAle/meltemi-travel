import { Struttura } from '.';
import { graphQLClient, gql } from './client';

const query = gql`
  query hp_recommendations {
    strutture(where: { promuoviSuHomePage: true }) {
      nome
      foto {
        url
      }
      short_description
      isola {
        nome
      }
      alloggi {
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
    .then((data: any) => data.strutture as Promise<Struttura[]>);

export { fetchHpRecommendations };