import { gql } from '../client';

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
