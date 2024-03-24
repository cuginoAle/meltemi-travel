import { Heading } from '@/components/heading';
import { Hr } from '@/components/hr';
import { MediaCarousel } from '@/components/mediaCarousel';
import { fetchStrutturaSlugs, fetchStruttura } from '@/gql';
import { marked } from 'marked';
import Image from 'next/image';
import person from '@/assets/person.svg';

const Struttura = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const struttura = await fetchStruttura(slug);
  const cards = struttura.foto.map((foto) => (
    <div key={foto.url} className="aspect-[16/9] relative">
      <Image src={foto.url} fill alt={struttura.nome} objectFit="cover" />
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

      <div className="max-w-screen-xl mx-auto px-2 md:px-6 ">
        <Heading className="text-2xl md:text-3xl">Gli alloggi</Heading>
      </div>
      <div className="max-w-screen-xl mx-auto p-2 md:p-6 flex gap-2 md:gap-4 flex-wrap">
        {struttura.alloggi.map((alloggio) => (
          <div
            key={alloggio.nome}
            className="flex flex-col gap-2 overflow-hidden rounded-md shadow-md w-80 bg-white"
          >
            <p className="bg-primary-900 text-lg flex justify-between items-center text-primary-400 p-2">
              {alloggio.nome}
              <div>
                <p className="flex gap-1 text-sm  bg-primary-900">
                  {alloggio.postiLetto} x{' '}
                  <Image src={person} width={16} height={16} alt="" />{' '}
                </p>
              </div>
            </p>
            <div className="p-2 md:p-4">
              <p>{alloggio.descrizione}</p>
              <p>
                {alloggio.prezzi.map((a) => (
                  <div key={a.id}>
                    <p>{a.fascia?.nome}</p>
                    <p>{a.prezzo}</p>
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return await fetchStrutturaSlugs();
}

export default Struttura;
