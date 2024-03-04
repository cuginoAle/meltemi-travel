import { Hero } from './components/hero';
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

      <MediaCarousel slideWidth={360} items={getItems()} />

      <div className="max-w-screen-xl mx-auto"></div>
    </main>
  );
}
