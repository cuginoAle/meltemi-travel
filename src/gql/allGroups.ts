import { GruppoDiIsole } from '@/app/gql/generated/graphql';
import { graphQLClient, gql } from './client';

const query = gql`
  query GruppiDiIsole {
    gruppiDiIsole {
      nome
      slug
      long_description
      isles {
        nome
        short_descrizione
        foto {
          url
        }
      }
      mappa {
        latitude
        longitude
      }
      foto {
        url
      }
    }
  }
`;

const fetchAllGroups = () =>
  graphQLClient
    .request(query)
    .then((data: any) => data.gruppiDiIsole as Promise<GruppoDiIsole[]>);

export { query, fetchAllGroups };
