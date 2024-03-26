import styles from './styles.module.css';

const Intro = () => {
  return (
    <section aria-label="La nostra filosofia" className={styles.wrapper}>
      <p>
        <span className="font-bold text-primary-500 text-2xl mr-1">
          Meltemi travel
        </span>
        si occupa della tua prossima vacanza in Grecia e promuove esperienze di
        viaggio, uniche e su misura, verso destinazioni che ancora conservano il
        fascino dell’autenticità. Dal 1992 siamo tour operator specializzato
        esclusivamente per la Grecia, il suo mare, le sue isole. Tracciamo ed
        organizziamo le tue vacanze in 65 diverse isole greche: isole delle
        Cicladi e Piccole Cicladi, isole del Dodecanneso, ma anche Sporadi, Egeo
        Orientale, Ionie, Saronico, Creta. Inoltre penisola Calcidica,
        Peloponneso, Cipro.
      </p>
      <p>
        Al fine di costruire la tua vacanza ideale definiamo l&apos;essenziale e
        lavoriamo sul dettaglio, così che tu possa poi onorare il tuo viaggio ed
        apprezzare ogni singolo momento del tuo soggiorno in Grecia. Da sempre
        abbiamo un particolare riguardo per le isole greche più nascoste e
        sperdute, isole dove il tempo si è fermato e la giornata trascorre lieve
        tra spiagge di sabbia e mare turchese, tramonti in veranda e taverne. In
        altre parole quella che si potrebbe definire l&apos;essenza di una vera
        ed indimenticabile vacanza greca.
      </p>
      <p>
        All&apos;interno del sito troverai un ampio catalogo con una selezione
        di proposte ed offerte relative a soggiorni in appartamenti e studio,
        resort e boutique hotel, piccoli alberghi tradizionali e pensioni
        caratteristiche, bed and breakfast e guesthouse, agriturismi e soluzioni
        glamping.
      </p>
    </section>
  );
};

export { Intro };
