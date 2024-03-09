'use client';
import { Accommodation } from '@/app/types';
import Image from 'next/image';
import { useAcCarousel } from 'use-ac-carousel';

const AccomodationCard = ({
  nome,
  description,
  isola,
  foto,
  alloggi,
}: Accommodation) => {
  const {
    scrollAreaRef,

    scrollAreaStyle,
  } = useAcCarousel({
    snapPosition: 'start',
    scrollPadding: '0 8px 0 0',
  });
  return (
    <div className="flex flex-col w-72">
      <div className="relative">
        <div ref={scrollAreaRef} className="flex gap-4" style={scrollAreaStyle}>
          {foto.map(({ url }) => (
            <div key={url} className="relative aspect-[4/3] w-full shrink-0">
              <Image src={url} sizes="300px" fill alt="" />
            </div>
          ))}
        </div>
        <div className="text-3xl font-bold absolute left-1/2 bottom-1 text-white text-shadow-sm -translate-x-1/2">
          ...
        </div>
      </div>
      <h1>{nome}</h1>
      <p>{description}</p>
    </div>
  );
};

export { AccomodationCard };
