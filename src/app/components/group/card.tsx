'use client';
import { Isola } from '@/app/gql';
import carouselStyle from '../mediaCarousel/style.module.css';
import { islesFolderName } from '@/app/constants';

import { hygraphLoader } from '@/app/utils/imageLoader';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps extends Isola {
  cardWidth: number;
}

const Card = ({ cardWidth, ...isola }: CardProps) => {
  return (
    <Link
      href={`${islesFolderName}/${isola.nome}`}
      className={`${carouselStyle.slideAnchor} shadow-md border-4 border-white`}
    >
      <Image
        className={carouselStyle.img}
        src={isola.foto[0].url}
        sizes={`${cardWidth}px`}
        fill
        alt=""
        loading="lazy"
        loader={hygraphLoader}
      />

      <h2 className="absolute bottom-0 font-light text-3xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-tr-lg text-white text-shadow-sm">
        {isola.nome}
      </h2>
    </Link>
  );
};

export { Card };
