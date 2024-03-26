'use client';

import Image from 'next/image';
import { useAcCarousel } from 'use-ac-carousel';
import { marked } from 'marked';

import Link from 'next/link';
import { Struttura } from '@/app/gql/generated/graphql';

const StrutturaCard = ({
  nome,
  slug,
  long_description,
  short_description,
  isola,
  foto,
  alloggi,
  useLongDescription = false,
}: Struttura & { useLongDescription?: boolean }) => {
  const {
    scrollAreaRef,

    scrollAreaStyle,
  } = useAcCarousel({
    snapPosition: 'start',
    scrollPadding: '0 8px 0 0',
  });
  return (
    <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-md h-full">
      <Link href={`/struttura/${slug}`} className="relative">
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
        {isola && (
          <h2 className="absolute top-0 font-light text2xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-br-lg text-white text-shadow-sm">
            {isola?.nome}
          </h2>
        )}
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="flex justify-between items-center">
          {nome}
          <span>
            da
            {alloggi.length > 1 ? (
              <span className="font-bold ml-1">
                €.
                {alloggi.reduce((acc, curr) => {
                  const miPrice = Math.min(...curr.prezzi.map((p) => p.prezzo));
                  return miPrice < acc ? miPrice : acc;
                }, Math.min(...alloggi[0].prezzi.map((p) => p.prezzo)))}
              </span>
            ) : (
              <span className="p-4 text-red-600">XX</span>
            )}
          </span>
        </h2>
        {alloggi.length > 1 ? (
          <div className="flex justify-end">
            <div className="flex gap-2 flex-wrap justify-end">
              {alloggi
                .sort((a, b) => a.postiLetto - b.postiLetto)
                .map((alloggio) => {
                  return (
                    <div key={alloggio.id}>
                      <p className="flex gap-1 text-sm py-1 px-2 bg-primary-900 rounded">
                        {alloggio.postiLetto} x
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <span className="p-4 text-red-600">Non ci sono alloggi definiti</span>
        )}

        <div
          className="line-clamp-[8]"
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              (useLongDescription ? long_description : short_description) || '',
              {},
            ),
          }}
        ></div>
      </div>
    </div>
  );
};

export { StrutturaCard };
