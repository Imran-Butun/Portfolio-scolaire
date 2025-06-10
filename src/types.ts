export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  projectType: 'personnel' | 'scolaire' | 'professionnel';
  tags: string[];
  date: string;
  skills: {
    creationNumerique: number;
    strategieCommunication: number;
    developpementWeb: number;
  };
  details: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export type Tab = 'accueil' | 'projets' | 'blog' | 'contact' | 'apropos';