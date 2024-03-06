import { getFolderEntries, readJsonFile } from '@/app/utils/fs';
const folderName = 'gruppo_isole';
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
async function getData() {
  const data = await getFolderEntries(folderName);

  return await data.map((file) => {
    return readJsonFile(folderName, file) as IslesGroup;
  });
}
const IslesGroup = async () => {
  const gruppi = await getData();
  return gruppi.map((gruppo) => {
    return (
      <div key={gruppo.nome}>
        <h2>{gruppo.nome}</h2>
      </div>
    );
  });
};

export { IslesGroup };
