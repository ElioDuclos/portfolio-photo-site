import { Photo } from '../types';

export const photos: Photo[] = [
  {
    id: 1,
    url: "/20240405-202911-Elio-Duclos.jpg",
    category: "architecture",
    title: "Louvre de Nuit",
    description: "Le musée du Louvre illuminé dans la nuit parisienne",
    metadata: {
      camera: "Sony A7III",
      lens: "24-70mm f/2.8",
      settings: "f/8, 20s, ISO 800"
    }
  },
  {
    id: 2,
    url: "/20240405-204357-Elio-Duclos.jpg",
    category: "street",
    title: "Paris en Mouvement",
    description: "Filés de lumière dans les rues de Paris",
    metadata: {
      camera: "Sony A7III",
      lens: "24-70mm f/2.8",
      settings: "f/5.6, 8s, ISO 400"
    }
  },
  {
    id: 3,
    url: "/20240405-204458-Elio-Duclos.jpg",
    category: "street",
    title: "Vendeur de Crêpes Parisien",
    description: "Scène de vie nocturne dans les rues de Paris",
    metadata: {
      camera: "Sony A7III",
      lens: "50mm f/1.8",
      settings: "f/2.8, 1/60s, ISO 3200"
    }
  },
  {
    id: 4,
    url: "/20240405-210134-Elio-Duclos.jpg",
    category: "architecture",
    title: "Cadenas d'Amour",
    description: "Détail artistique des cadenas colorés sur les ponts de Paris",
    metadata: {
      camera: "Sony A7III",
      lens: "85mm f/1.4",
      settings: "f/2.0, 1/125s, ISO 1600"
    }
  },
  {
    id: 5,
    url: "/20240405-210237-Elio-Duclos.jpg",
    category: "architecture",
    title: "Pyramide du Louvre",
    description: "La pyramide emblématique du Louvre illuminée de l'intérieur",
    metadata: {
      camera: "Sony A7III",
      lens: "24-70mm f/2.8",
      settings: "f/4, 15s, ISO 640"
    }
  }
];

export const categories = ['all', 'portrait', 'paysage', 'architecture', 'street'] as const;