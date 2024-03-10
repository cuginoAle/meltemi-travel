import { Hero } from './components/hero';
import { Hr } from './components/hr';
import { Intro } from './components/intro';
import { MediaCarousel } from './components/mediaCarousel';
import { Metadata } from 'next';
import settings from 'content/settings.json';
import home from 'content/homepage.json';
import { Group } from './components/group';

import { AccomodationCard } from './components/accomodation/card';
import { accomodationsFolderName } from './constants';
import { getFolderEntries, readJsonFile } from './utils/fs';

const getItems = () => {
  return getFolderEntries(accomodationsFolderName)
    .map((fileName) => readJsonFile(accomodationsFolderName, fileName))
    .filter((accomodation) => home.in_evidenza.includes(accomodation.nome))
    .map((accomodation) => (
      <AccomodationCard key={accomodation.nome} {...accomodation} />
    ));
};

export const metadata: Metadata = {
  title: settings.title,
  description: settings.subtitle,
};

const slideWidth = 1280 / 4 - 16;

export default function Home() {
  return (
    <main>
      <Hero />
      <MediaCarousel
        title="Ultime proposte:"
        slideWidth={slideWidth}
        items={getItems()}
      />
      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className="p-3 py-5 md:p-6 lg:p-20 text-primary-300">
          <Intro />
        </div>
        <Hr />
      </div>

      <div className="max-w-screen-xl mx-auto ">
        <h3 className="text-3xl md:text-5xl text-center mt-8 font-bold text-primary-500">
          Le nostre destinazioni
        </h3>
      </div>
      <Group />
    </main>
  );
}
