import { getFolderEntries, readJsonFile } from '@/app/utils/fs';
import { MediaCarousel } from '../mediaCarousel';
import carouselStyle from '../mediaCarousel/style.module.css';
import { isleGroupFolderName, islesFolderName } from '@/app/constants';
import { Isle, IslesGroup } from '@/app/types';

async function getGroupData() {
  const data = getFolderEntries(isleGroupFolderName);

  return data.map((file) => {
    return readJsonFile(isleGroupFolderName, file) as IslesGroup;
  });
}

async function getIslesData() {
  const data = getFolderEntries(islesFolderName);

  return data.map((file) => {
    return readJsonFile(islesFolderName, file) as Isle;
  });
}

const Card = (isola: Isle) => {
  return (
    <a
      href={`${islesFolderName}/${isola.nome}`}
      className={`${carouselStyle.slideAnchor} relative`}
    >
      <img
        className={carouselStyle.img}
        src={isola.foto[0].url + '&gid=' + isola.nome}
        alt=""
        loading="lazy"
      />

      <h2 className="absolute bottom-0 font-light text-3xl p-1 px-3 bg-primary-400 bg-opacity-50 backdrop-blur-sm rounded-tr-lg text-white text-shadow-sm">
        {isola.nome}
      </h2>
    </a>
  );
};
const Group = async () => {
  const gruppi = await getGroupData();
  const isole = await getIslesData();

  return gruppi.map((gruppo) => {
    return (
      <div key={gruppo.nome}>
        <MediaCarousel
          title={gruppo.nome}
          items={isole
            .filter((isola) => gruppo.isole.includes(isola.nome))
            .map((isola) => (
              <Card key={isola.nome} {...isola} />
            ))}
        />
      </div>
    );
  });
};

export { Group };
