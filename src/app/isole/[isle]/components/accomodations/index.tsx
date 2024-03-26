import { StrutturaCard } from '@/components/struttura/card';

import styles from './styles.module.css';
import { Struttura } from '@/app/gql/generated/graphql';

interface AccomodationCardProps {
  accomodations: Struttura[];
}

const Accomodations = ({ accomodations }: AccomodationCardProps) => {
  return (
    <div className={styles.grid}>
      {accomodations.map((accomodation) => (
        <StrutturaCard
          key={accomodation.nome}
          {...accomodation}
          useLongDescription
        />
      ))}
    </div>
  );
};

export { Accomodations };
