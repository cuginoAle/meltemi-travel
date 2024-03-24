import { Struttura } from '.';
import { graphQLClient, gql } from './client';

const strutturaSlugs = gql`
  query strutturaSlugs {
    strutture {
      slug
    }
  }
`;

const queryStruttura = (slug?: string) => {
  const where = slug ? `(where: {slug: "${slug}"})` : '';

  return gql`
    query struttura {
      struttura ${where} {
        alloggi {
          id
          postiLetto
          prezzi {
            ... on FasciaDiPrezzo {
              prezzo
            }
          }
          descrizione
          review {
            autore
            commento
            data
          }
          nome
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
const fetchStruttura = (slug?: string) =>
  graphQLClient
    .request(queryStruttura(slug))
    .then((data: any) => data.struttura as Struttura);

const fetchStrutturaSlugs = () =>
  graphQLClient
    .request(strutturaSlugs)
    .then((data: any) => data.strutture.map(({ slug }: Struttura) => slug));

export { fetchStruttura, fetchStrutturaSlugs };
