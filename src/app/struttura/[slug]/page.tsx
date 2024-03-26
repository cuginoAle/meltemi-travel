import { Heading } from '@/components/heading';
import { Hr } from '@/components/hr';
import { MediaCarousel } from '@/components/mediaCarousel';
import { fetchStrutturaSlugs, fetchStruttura } from '@/gql';
import { marked } from 'marked';
import Image from 'next/image';
import Person from '@/assets/person.svg';
import MessageIcon from '@/assets/message.svg';
import BG from '@/assets/greek_bg.webp';
import { TileGrid } from '@/components/tileGrid';

const Struttura = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const struttura = await fetchStruttura(slug);
  const cards = struttura.foto.map((foto) => (
    <div key={foto.url} className="aspect-[16/9] relative">
      <Image
        src={foto.url}
        fill
        alt={struttura.nome}
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  ));

  return (
    <>
      <MediaCarousel items={cards} slideWidth={800} />

      <div className="max-w-screen-xl mx-auto bg-white p-2 md:p-6 flex gap-2 items-center">
        <p className="text-primary-500">{struttura.isola?.nome}:</p>
        <h2 className="text-2xl md:text-3xl text-primary-500 font-bold">
          {struttura.nome}
        </h2>
      </div>

      <Hr className="max-w-screen-xl mx-auto" />

      <div
        className="max-w-screen-xl mx-auto text-lg bg-white p-4 md:p-8 md:columns-2 lg:columns-3"
        dangerouslySetInnerHTML={{
          __html: marked.parse(struttura.long_description || ''),
        }}
      ></div>
      <Hr className="max-w-screen-xl mx-auto" />

      <div className="relative">
        <Image
          alt=""
          src={BG}
          width={1000}
          height={599}
          className="absolute bottom-0 right-0"
        />
        <div className="relative">
          <div className="max-w-screen-xl mx-auto px-2 md:px-6 flex flex-col">
            <Heading className="text-2xl md:text-3xl">Gli alloggi</Heading>
            <div
              className="list p-6"
              dangerouslySetInnerHTML={{
                __html: marked.parse(struttura.condizioniDiAffitto || ''),
              }}
            />
          </div>

          <div className="max-w-screen-xl mx-auto p-2 md:p-6">
            <TileGrid>
              {struttura.alloggi.map((alloggio) => (
                <div
                  key={alloggio.nome}
                  className="flex flex-col gap-2 overflow-hidden rounded-md shadow-md bg-white"
                >
                  <div className="bg-primary-900 text-lg flex justify-between items-center text-primary-400 p-2">
                    {alloggio.nome}

                    <p className="flex gap-1 text-sm  bg-primary-900">
                      {alloggio.postiLetto} x{' '}
                      <Person className="w-5 h-5 fill-primary-400 " />
                    </p>
                  </div>
                  <div className="p-2 md:p-4">
                    <p>{alloggio.descrizione}</p>
                    <div>
                      {alloggio.prezzi.map((a) => (
                        <div
                          key={a.id}
                          className="flex justify-between items-center odd:bg-slate-100 px-1"
                        >
                          <p>{a.fascia?.nome}</p>
                          <p>{a.prezzo}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </TileGrid>
          </div>
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <button className="px-4 py-2 bg-green-700 shadow-md text-white text-lg rounded-md">
              <span className="flex gap-4 items-center">
                <MessageIcon className="h-6" />
                <span>Verifica disponibilità</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return await fetchStrutturaSlugs();
}

export default Struttura;
