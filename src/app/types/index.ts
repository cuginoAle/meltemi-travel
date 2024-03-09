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
  short_description: string;
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
  posti_letto: number;
}
export type { Isle, IslesGroup, IsleFile, Accommodation, Alloggio };
