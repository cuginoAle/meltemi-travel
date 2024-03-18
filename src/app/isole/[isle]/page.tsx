import logo from '@/assets/logo.webp';
import setting from 'content/settings.json';
import Image from 'next/image';
import { Hr } from '@/app/components/hr';
import Link from 'next/link';
import { Accomodations } from './components/accomodations';

import { IsleHero } from './components/isleHero';
import { fetchAllIsles, fetchIsola } from '@/app/gql';

export default async function Isle({
  params: { isle },
}: {
  params: { isle: string };
}) {
  console.log('isle', isle);
  const isleData = await fetchIsola(isle);
  console.log('isleData', isleData);

  return (
    <main className="pb-8">
      <div className="max-w-screen-xl mx-auto bg-white">
        <Link href="/" className=" gap-3 lg:gap-4 items-center p-2 inline-flex">
          <Image
            src={logo}
            className="w-8 shadow-logo_small rounded-full"
            alt="Meltemi travel"
            sizes="32px"
          />
          <h1 className={`text-primary-500 text-2xl font-bold`}>
            {setting.title}
          </h1>
        </Link>

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
          Accomodations here
          {/* <Accomodations accomodations={accomodations} /> */}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const isleNames = await fetchAllIsles().then((isles) =>
    isles.map((isle) => isle.nome),
  );

  console.log('isleNames', isleNames);

  return isleNames;
}
