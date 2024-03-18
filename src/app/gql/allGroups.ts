import { IslesGroup } from '../types';
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
    .then((data: any) => data.gruppiDiIsole as Promise<IslesGroup[]>);

export { fetchAllGroups };
