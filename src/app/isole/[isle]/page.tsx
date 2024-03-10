import { Accommodation, Isle as IsleType } from '@/app/types';
import { accomodationsFolderName, islesFolderName } from '../../constants';
import { getFolderEntries, readJsonFile } from '../../utils/fs';

import logo from '@/assets/logo.webp';
import setting from 'content/settings.json';
import Image from 'next/image';
import { Hr } from '@/app/components/hr';
import Link from 'next/link';

import { Accomodations } from './components/accomodations';
import { marked } from 'marked';

export default function Isle({
  params: { isle },
}: {
  params: { isle: string };
}) {
  const isleData: IsleType = readJsonFile(islesFolderName, isle + '.json');
  const accomodations: Accommodation[] = getFolderEntries(
    accomodationsFolderName,
  )
    .map((fileName) => readJsonFile(accomodationsFolderName, fileName))
    .filter((accomodation) => accomodation.isola.includes(isleData.nome));

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

        <div className="relative aspect-[2/1]">
          <Image
            sizes="(min-width:1280px) 100vw, 1280px"
            fill
            src={isleData.foto[0].url}
            alt=""
          />

          <h1 className="absolute bottom-0 font-light text-3xl lg:text-5xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-tr-2xl lg:rounded-tr-4xl text-white text-shadow-sm">
            {isleData.nome}
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto bg-white">
        <Hr />
        <div className="p-3 flex flex-col items-center sm:flex-row gap-4 text-primary-500">
          <div className="flex-grow py-5 md:p-6 lg:p-20 text-2xl">
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(isleData.long_description),
              }}
            />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204325.20632152347!2d25.70744628106076!3d36.85250134687546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1497efc1c89982cb%3A0x400bd2ce2b9c790!2sAmorgos%20840%2008%2C%20Greece!5e0!3m2!1sen!2sit!4v1710061907981!5m2!1sen!2sit"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Hr />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-2 md:p-4 lg:p-8">
          <Accomodations accomodations={accomodations} />
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const isleFileNames = getFolderEntries(islesFolderName);

  return isleFileNames.map((fileName) => fileName.replace('.json', ''));
}
