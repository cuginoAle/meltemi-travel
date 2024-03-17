interface Isle {
  nome: string;
  short_description: string;
  long_description?: string;
  foto: foto[];
  coordinate: {
    formattedAddress: string;
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

interface IslesGroup {
  nome: string;
  short_description: string;
  isole: Isle[];
  foto: foto[];
}

interface Accommodation {
  nome: string;
  description: string;
  short_description: string;
  isola: Isle;
  foto: foto[];
  alloggi: Alloggio[];
}

interface foto {
  src: string;
  dominantColor: string;
}

interface Alloggio {
  nome: string;
  prezzo: number;
  description: string;
  foto: foto[];
  posti_letto: number;
}
export type { Isle, IslesGroup, Accommodation, Alloggio };
