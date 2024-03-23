import { Alloggio } from '.';
import { graphQLClient, gql } from './client';

const query = gql`
  query AlloggiosHP {
    alloggios(where: { promuoviSuHomePage: true }) {
      descrizione
      foto {
        url
      }
      nome
      postiLetto
      prezzi {
        ... on FasciaDiPrezzo {
          id
          prezzo
          fascia {
            nome
          }
        }
      }
    }
  }
`;

const fetchAlloggioHP = () =>
  graphQLClient
    .request(query)
    .then((data: any) => data.alloggios as Promise<Alloggio[]>);

export { fetchAlloggioHP };
