# Guide de Maintenance des Photos

Ce guide explique comment gérer facilement les photos du portfolio.

## Structure du Système

Le système de photos est centralisé dans un seul fichier : `src/data/photos.ts`

## Ajouter une Nouvelle Photo

1. Placez votre fichier image dans le dossier `public/`
2. Ouvrez le fichier `src/data/photos.ts`
3. Ajoutez une nouvelle entrée dans le tableau `photos` :

```typescript
{
  id: 6,                                    // Numéro unique (incrémentez le dernier)
  url: "/nom-de-votre-photo.jpg",          // Nom du fichier dans /public
  category: "architecture",                 // Catégorie (voir ci-dessous)
  title: "Titre de la Photo",              // Titre affiché
  description: "Description de la photo",   // Description détaillée
  metadata: {
    camera: "Sony A7III",                   // Appareil photo utilisé
    lens: "24-70mm f/2.8",                  // Objectif utilisé
    settings: "f/8, 1/250s, ISO 800"       // Paramètres (ouverture, vitesse, ISO)
  }
}
```

## Catégories Disponibles

Les catégories sont définies à la fin du fichier `photos.ts` :

- `portrait` - Portraits
- `paysage` - Paysages
- `architecture` - Architecture
- `street` - Photographie de rue

### Ajouter une Nouvelle Catégorie

Pour ajouter une catégorie, modifiez la ligne des catégories :

```typescript
export const categories = ['all', 'portrait', 'paysage', 'architecture', 'street', 'nouvelle-categorie'] as const;
```

## Modifier une Photo Existante

1. Trouvez la photo par son `id` dans `src/data/photos.ts`
2. Modifiez les champs souhaités (title, description, metadata, etc.)
3. Sauvegardez le fichier

## Supprimer une Photo

1. Supprimez l'entrée complète (entre les accolades `{ }`) du tableau `photos`
2. Optionnel : Supprimez le fichier image du dossier `public/`

## Métadonnées EXIF

Les métadonnées sont organisées en trois parties dans le champ `settings` :

- **Ouverture** : f/2.8, f/4, f/8, etc.
- **Vitesse d'obturation** : 1/250s, 1s, 30s, etc.
- **Sensibilité ISO** : ISO 100, ISO 800, ISO 3200, etc.

Format recommandé : `"f/8, 1/250s, ISO 800"`

## Exemple Complet

```typescript
export const photos: Photo[] = [
  {
    id: 1,
    url: "/photo-exemple.jpg",
    category: "architecture",
    title: "Tour Eiffel de Nuit",
    description: "La Tour Eiffel illuminée au coucher du soleil",
    metadata: {
      camera: "Sony A7III",
      lens: "24-70mm f/2.8",
      settings: "f/4, 1/60s, ISO 1600"
    }
  },
  // Ajoutez vos photos ici...
];
```

## Notes Importantes

- Les images dans `/public` sont accessibles directement via `/nom-fichier.jpg`
- Les ID doivent être uniques
- Utilisez des noms de fichiers sans espaces ni caractères spéciaux
- Format d'image recommandé : JPG optimisé pour le web
