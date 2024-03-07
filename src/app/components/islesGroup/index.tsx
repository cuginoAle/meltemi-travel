import { getFolderEntries, readJsonFile } from '@/app/utils/fs';
import { MediaCarousel } from '../mediaCarousel';
import carouselStyle from '../mediaCarousel/style.module.css';

const groupFolderName = 'gruppo_isole';
const itemFolderName = 'isole';
interface Isle {
  nome: string;
  short_description: string;
  long_description: string;
  foto: {
    url: string;
  }[];
}

interface IslesGroup {
  nome: string;
  short_description: string;
  isole: string[];
  foto: {
    url: string;
  }[];
}
async function getGroupData() {
  const data = await getFolderEntries(groupFolderName);

  return await data.map((file) => {
    return readJsonFile(groupFolderName, file) as IslesGroup;
  });
}

async function getIslesData() {
  const data = await getFolderEntries(itemFolderName);

  return await data.map((file) => {
    return readJsonFile(itemFolderName, file) as Isle;
  });
}

const Card = (isola: Isle) => {
  return (
    <a href="" className={`${carouselStyle.slideAnchor} relative`}>
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
const IslesGroup = async () => {
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

export { IslesGroup };
