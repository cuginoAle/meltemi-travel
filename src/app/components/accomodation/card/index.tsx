'use client';

import Image from 'next/image';
import { useAcCarousel } from 'use-ac-carousel';
import person from '@/assets/person.svg';
import { marked } from 'marked';
import { Struttura } from '@/app/gql';

const AccomodationCard = ({
  nome,
  long_description,
  isola,
  foto,
  alloggios,
}: Struttura) => {
  const {
    scrollAreaRef,

    scrollAreaStyle,
  } = useAcCarousel({
    snapPosition: 'start',
    scrollPadding: '0 8px 0 0',
  });
  return (
    <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-md h-full">
      <div className="relative">
        <div ref={scrollAreaRef} className="flex gap-4" style={scrollAreaStyle}>
          {foto.map(({ url }) => (
            <div key={url} className="relative aspect-[4/3] w-full shrink-0">
              <Image src={url} sizes="300px" fill alt="" />
            </div>
          ))}
        </div>
        {foto.length > 1 && (
          <div className="text-5xl font-bold absolute left-1/2 bottom-1 text-white text-shadow-sm -translate-x-1/2">
            ...
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="flex justify-between items-center">
          {nome}{' '}
          <span className="font-bold ml-1">
            €{' '}
            {alloggios.reduce((acc, curr) => {
              const miPrice = Math.min(...curr.prezzi.map((p) => p.prezzo));
              return miPrice < acc ? miPrice : acc;
            }, Math.min(...alloggios[0].prezzi.map((p) => p.prezzo)))}
          </span>
        </h2>
        <div className="flex justify-end">
          <div className="flex gap-2 ">
            {alloggios
              .sort((a, b) => a.postiLetto - b.postiLetto)
              .map((alloggio) => (
                <div key={alloggio.nome}>
                  <p className="flex gap-1 text-sm py-1 px-2 bg-primary-900 rounded">
                    {alloggio.postiLetto} x{' '}
                    <Image src={person} width={16} height={16} alt="" />{' '}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: marked(long_description) }} /> */}
        <div>{long_description}</div>
      </div>
    </div>
  );
};

export { AccomodationCard };
