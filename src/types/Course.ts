export interface Course {
    id: number;
    name: string;
    description: string;
    fullDescription?: string;
    nivel: string;
    img: string;
    cover?: string;
    topics?: string[];
    url: string;
    borderColor: string;
    customCupon?: string | null;
    defaultCupon: string;
  }
  