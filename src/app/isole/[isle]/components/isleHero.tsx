'use client';
import { Isle } from '@/app/types';
import { imageLoader } from '@/app/utils/imageLoader';
import Image from 'next/image';

const IsleHero = ({ isleData }: { isleData: Isle }) => {
  return (
    <div className="relative aspect-[2/1]">
      <Image
        sizes="(max-width:1280px) 100vw, 1280px"
        fill
        style={{ backgroundColor: isleData.foto[0].dominantColor }}
        src={isleData.foto[0].src}
        alt=""
        loader={imageLoader}
      />

      <h1 className="absolute bottom-0 font-light text-3xl lg:text-5xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-tr-2xl lg:rounded-tr-4xl text-white text-shadow-sm">
        {isleData.nome}
      </h1>
    </div>
  );
};

export { IsleHero };
