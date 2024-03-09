import { Isle as IsleType } from '@/app/types';
import { accomodationsFolderName, islesFolderName } from '../../constants';
import { getFolderEntries, readJsonFile } from '../../utils/fs';

import logo from '@/assets/logo.webp';
import setting from 'content/settings.json';
import Image from 'next/image';
import { Hr } from '@/app/components/hr';
import Link from 'next/link';
import { AccomodationCard } from '@/app/components/accomodation/card';

export default function Isle({
  params: { isle },
}: {
  params: { isle: string };
}) {
  const isleData: IsleType = readJsonFile(islesFolderName, isle + '.json');
  const accomodations = getFolderEntries(accomodationsFolderName)
    .map((fileName) => readJsonFile(accomodationsFolderName, fileName))
    .filter((accomodation) => accomodation.isole.includes(isleData.nome));

  return (
    <main>
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

        <Hr />

        <div className="relative aspect-[2/1]">
          <Image
            sizes="(min-width:1280px) 100vw, 1280px"
            fill
            src={isleData.foto[0].url + '?gid=' + new Date().getTime()}
            alt=""
          />

          <h1 className="absolute bottom-0 font-light text-3xl lg:text-5xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-tr-2xl lg:rounded-tr-4xl text-white text-shadow-sm">
            {isleData.nome}
          </h1>
        </div>
        <Hr />
      </div>

      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="p-3 py-5 md:p-6 lg:p-20 text-primary-300">
          <p>{isleData.long_description}</p>
        </div>

        {accomodations.map((accomodation) => (
          <AccomodationCard key={accomodation.nome} {...accomodation} />
          // <div key={accomodation.nome}>
          //   <Image
          //     sizes="(min-width:1280px) 100vw, 1280px"
          //     width={400}
          //     height={300}
          //     src={accomodation.foto[0].url + '?gid=' + new Date().getTime()}
          //     alt=""
          //   />
          //   <div className="max-w-screen-xl mx-auto bg-white">
          //     <div className="p-3 py-5 md:p-6 lg:p-20 text-primary-300">
          //       <h2 className="text-2xl font-bold">{accomodation.nome}</h2>
          //       <p>{accomodation.description}</p>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const isleFileNames = getFolderEntries(islesFolderName);

  return isleFileNames.map((fileName) => fileName.replace('.json', ''));
}
