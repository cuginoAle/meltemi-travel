interface IsleFile extends Isle {
  fileName: string;
}

interface Isle {
  nome: string;
  short_description: string;
  long_description: string;
  foto: Photo[];
}

interface IslesGroup {
  nome: string;
  short_description: string;
  isole: string[];
  foto: Photo[];
}

interface Accommodation {
  nome: string;
  description: string;
  isola: string;
  foto: Photo[];
  alloggi: Alloggio[];
}

interface Photo {
  url: string;
}

interface Alloggio {
  nome: string;
  prezzo: number;
  description: string;
  foto: Photo[];
}
export type { Isle, IslesGroup, IsleFile, Accommodation, Alloggio };
