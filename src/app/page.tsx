import { Hero } from './components/hero';
import { Hr } from './components/hr';
import { Intro } from './components/intro';
import { MediaCarousel } from './components/mediaCarousel';
import { Metadata } from 'next';
import settings from 'content/settings.json';
import { IslesGroup } from './components/islesGroup';

const getItems = () =>
  new Array(40)
    .fill(0)
    .map(
      (_, index) =>
        `https://source.unsplash.com/random/900x900/?greek%20islands?sig=${index}`,
    );

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
        title="Alcune proposte:"
        slideWidth={slideWidth}
        items={getItems()}
      />
      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className="p-3 md:p-6 lg:p-20 text-primary-300">
          <Intro />
        </div>
        <Hr />
        <IslesGroup />
      </div>
    </main>
  );
}
