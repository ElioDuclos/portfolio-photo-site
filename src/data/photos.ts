import { Photo } from '../types';

export const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "paysage",
    title: "Montagnes brumeuses",
    description: "Paysage montagneux au lever du soleil",
    metadata: {
      camera: "Sony A7III",
      lens: "24-70mm f/2.8",
      settings: "f/8, 1/250s, ISO 100"
    }
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504703395950-b89145a5425b",
    category: "portrait",
    title: "Portrait naturel",
    description: "Portrait en lumière naturelle",
    metadata: {
      camera: "Canon EOS R5",
      lens: "85mm f/1.4",
      settings: "f/2.0, 1/200s, ISO 200"
    }
  },
  // Add more photos here...
];

export const categories = ['all', 'portrait', 'paysage', 'architecture', 'street'] as const;