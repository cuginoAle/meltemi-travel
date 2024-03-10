'use client';
import { Accommodation } from '@/app/types';
import Image from 'next/image';
import { useAcCarousel } from 'use-ac-carousel';
import person from '@/assets/person.svg';
import { marked } from 'marked';

const AccomodationCard = ({
  nome,
  description,
  short_description,
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
    <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-md">
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
      <div className="p-2 flex flex-col gap-2">
        <h2 className="flex justify-between items-center">
          {nome}{' '}
          <span className="font-bold ml-1">
            €{' '}
            {alloggi.reduce((acc, curr) => {
              return curr.prezzo < acc ? curr.prezzo : acc;
            }, alloggi[0].prezzo)}
          </span>
        </h2>
        <div className="flex justify-end">
          <div className="flex gap-2 ">
            {alloggi
              .sort((a, b) => a.posti_letto - b.posti_letto)
              .map((alloggio) => (
                <div key={alloggio.nome}>
                  <p className="flex gap-1 text-sm py-1 px-2 bg-primary-900 rounded">
                    {alloggio.posti_letto} x{' '}
                    <Image src={person} width={16} height={16} alt="" />{' '}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: marked(short_description) }} />
      </div>
    </div>
  );
};

export { AccomodationCard };
