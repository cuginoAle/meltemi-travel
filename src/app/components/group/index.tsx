import { MediaCarousel } from '../mediaCarousel';
import { fetchAllGroups } from '@/app/gql/allGroups';

import { Card } from './card';

const cardWidth = 1280 / 5 - 16;

const Group = async () => {
  const gruppi = await fetchAllGroups();

  return gruppi.map((gruppo) => (
    <div key={gruppo.nome}>
      <MediaCarousel
        title={gruppo.nome}
        slideWidth={cardWidth}
        items={gruppo.isles.map((isola) => (
          <Card key={isola.nome} {...isola} cardWidth={cardWidth} />
        ))}
      />
    </div>
  ));
};

export { Group };
