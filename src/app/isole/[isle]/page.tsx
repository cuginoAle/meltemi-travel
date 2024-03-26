import { Hr } from '@/components/hr';
import { Accomodations } from './components/accomodations';

import { fetchAllIsles, fetchIsola } from '@/gql';
import { IsleHero } from './components/isleHero';

export default async function Isle({
  params: { isle },
}: {
  params: { isle: string };
}) {
  const isleData = await fetchIsola(isle);

  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-white">
        <IsleHero isleData={isleData} />
      </div>

      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className="p-3 flex flex-col items-center sm:flex-row gap-4 text-primary-500">
          <div className="flex-grow py-5 md:p-6 lg:p-20 text-2xl basis-1/2 shrink-0">
            <p>{isleData.short_descrizione}</p>
          </div>
          {isleData.coordinate && (
            <iframe
              className="rounded-lg shadow-md overflow-hidden"
              src={`https://www.google.com/maps/embed/v1/place?q=${isleData.coordinate.latitude},${isleData.coordinate.longitude}&zoom=8&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>

        <Hr />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-2 md:p-4 lg:p-8">
          <Accomodations accomodations={isleData.strutture} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const isleNames = await fetchAllIsles().then((isles) =>
    isles.map((isle) => isle.nome),
  );

  return isleNames;
}
