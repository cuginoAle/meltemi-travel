import { AccomodationCard } from '@/app/components/accomodation/card';

import styles from './styles.module.css';
import { Struttura } from '@/app/gql';
interface AccomodationCardProps {
  accomodations: Struttura[];
}

const Accomodations = ({ accomodations }: AccomodationCardProps) => {
  return (
    <div className={styles.grid}>
      {accomodations.map((accomodation) => (
        <AccomodationCard key={accomodation.nome} {...accomodation} />
      ))}
    </div>
  );
};

export { Accomodations };
