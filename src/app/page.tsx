import { Hero } from './components/hero';
import { Hr } from './components/hr';
import { Intro } from './components/intro';
import { MediaCarousel } from './components/mediaCarousel';

const getItems = () =>
  new Array(40)
    .fill(0)
    .map(
      (_, index) =>
        `https://source.unsplash.com/random/900x900/?greek%20islands?sig=${index}`,
    );

export default function Home() {
  return (
    <main>
      <Hero />
      <MediaCarousel title="In evidenza:" slideWidth={360} items={getItems()} />
      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className=" p-2 md:p-4 lg:p-8 text-primary-300">
          <Intro />
        </div>
        <Hr />
      </div>
    </main>
  );
}
