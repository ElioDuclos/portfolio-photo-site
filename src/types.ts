export interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
  metadata: {
    camera: string;
    lens: string;
    settings: string;
  };
}

export type Category = 'all' | 'portrait' | 'paysage' | 'architecture' | 'street' | 'corporate';