import fs from 'fs';

const cwd = process.cwd();

const getFolderEntries = (folderName: string) =>
  fs.readdirSync(cwd + '/content/' + folderName).filter((file) => {
    return file.endsWith('.json');
  });

const readJsonFile = (folderName: string, fileName: string) => {
  const file = fs.readFileSync(cwd + '/content/' + folderName + '/' + fileName);
  return JSON.parse(file.toString());
};

export { getFolderEntries, readJsonFile };
