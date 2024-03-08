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

export type { Isle, IslesGroup };
