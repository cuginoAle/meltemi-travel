import { AccomodationCard } from '@/app/components/accomodation/card';
import { Accommodation } from '@/app/types';
import styles from './styles.module.css';
interface AccomodationCardProps {
  accomodations: Accommodation[];
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
