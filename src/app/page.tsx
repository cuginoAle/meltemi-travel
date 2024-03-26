import { HomeHero } from '../components/homeHero';
import { Hr } from '../components/hr';
import { Intro } from '../components/intro';
import { MediaCarousel } from '../components/mediaCarousel';
import { Metadata } from 'next';
import settings from 'content/settings.json';
import { Group } from '../components/group';

import { StrutturaCard } from '../components/struttura/card';

import { fetchHpRecommendations } from '../gql';
import { Heading } from '@/components/heading';

const getRecos = () =>
  fetchHpRecommendations().then((data) =>
    data.map((struttura) => (
      <StrutturaCard key={struttura.nome} {...struttura} />
    )),
  );

export const metadata: Metadata = {
  title: settings.title,
  description: settings.subtitle,
};

const slideWidth = 1280 / 5 - 16;

export default async function Home() {
  const recos = await getRecos();

  return (
    <main>
      <HomeHero />
      <MediaCarousel
        title="Ultime proposte:"
        slideWidth={slideWidth}
        items={recos}
      />
      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className="p-3 py-5 md:p-6 lg:p-20 text-primary-300">
          <Intro />
        </div>
        <Hr />
      </div>

      <div className="max-w-screen-xl mx-auto ">
        <Heading className="text-center">Le nostre destinazioni</Heading>
      </div>
      <Group />
    </main>
  );
}
