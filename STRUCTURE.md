# Structure du Projet - Guide Touristique Nador

```
Guide Touristique Nador/
│
├── public/                          # Fichiers statiques publics
│   └── vite.svg
│
├── server/                          # JSON Server (Backend simulé)
│   ├── db.json                      # Base de données JSON
│   └── routes.json                  # Routes personnalisées (optionnel)
│
├── src/
│   ├── assets/                      # Ressources statiques
│   │   ├── images/                  # Images du projet
│   │   └── icons/                   # Icônes
│   │
│   ├── components/                  # Composants réutilisables
│   │   ├── common/                  # Composants partagés
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── SearchBar.tsx
│   │   │
│   │   ├── visitor/                 # Composants espace visiteur
│   │   │   ├── PlaceCard.tsx        # Card lieu touristique
│   │   │   ├── PlaceGallery.tsx     # Galerie photos
│   │   │   ├── FilterBar.tsx        # Barre de filtres
│   │   │   ├── CategoryFilter.tsx   # Filtrage par catégorie
│   │   │   ├── NewsletterForm.tsx   # Formulaire d'inscription newsletter
│   │   │   └── PlaceDetails.tsx     # Détails d'un lieu
│   │   │
│   │   └── admin/                   # Composants espace admin
│   │       ├── PlaceForm.tsx        # Formulaire création/modification lieu
│   │       ├── PlaceTable.tsx       # Tableau des lieux
│   │       ├── DashboardCard.tsx    # Card statistiques
│   │       ├── Sidebar.tsx          # Menu latéral admin
│   │       └── ConfirmDialog.tsx    # Dialogue de confirmation
│   │
│   ├── pages/                       # Pages de l'application
│   │   ├── visitor/                 # Pages espace visiteur
│   │   │   ├── HomePage.tsx         # Page d'accueil
│   │   │   ├── PlacesListPage.tsx   # Liste des lieux
│   │   │   └── PlaceDetailPage.tsx  # Détails d'un lieu
│   │   │
│   │   └── admin/                   # Pages espace admin
│   │       ├── LoginPage.tsx        # Connexion administrateur
│   │       ├── DashboardPage.tsx    # Tableau de bord
│   │       ├── PlacesManagementPage.tsx  # Gestion des lieux
│   │       ├── CreatePlacePage.tsx  # Création d'un lieu
│   │       └── EditPlacePage.tsx    # Modification d'un lieu
│   │
│   ├── layouts/                     # Layouts de l'application
│   │   ├── VisitorLayout.tsx        # Layout espace visiteur
│   │   ├── AdminLayout.tsx          # Layout espace admin
│   │   └── AuthLayout.tsx           # Layout authentification
│   │
│   ├── routes/                      # Configuration des routes
│   │   ├── AppRoutes.tsx            # Routes principales
│   │   └── PrivateRoute.tsx         # Protection des routes admin
│   │
│   ├── store/                       # Redux Toolkit
│   │   ├── slices/                  # Slices Redux
│   │   │   ├── authSlice.ts         # Authentification
│   │   │   ├── placesSlice.ts       # Gestion des lieux
│   │   │   └── newsletterSlice.ts   # Newsletter
│   │   └── store.ts                 # Configuration du store
│   │
│   ├── services/                    # Services API
│   │   ├── api.ts                   # Configuration Axios
│   │   ├── authService.ts           # Services authentification
│   │   ├── placesService.ts         # Services lieux
│   │   └── newsletterService.ts     # Services newsletter
│   │
│   ├── types/                       # Types TypeScript
│   │   ├── place.types.ts           # Types lieux touristiques
│   │   ├── auth.types.ts            # Types authentification
│   │   ├── user.types.ts            # Types utilisateurs
│   │   └── newsletter.types.ts      # Types newsletter
│   │
│   ├── schemas/                     # Schémas de validation Yup
│   │   ├── placeSchema.ts           # Validation lieu
│   │   ├── loginSchema.ts           # Validation connexion
│   │   └── newsletterSchema.ts      # Validation newsletter
│   │
│   ├── hooks/                       # Hooks personnalisés
│   │   ├── useAuth.ts               # Hook authentification
│   │   ├── usePlaces.ts             # Hook gestion lieux
│   │   └── useDebounce.ts           # Hook debounce recherche
│   │
│   ├── utils/                       # Utilitaires
│   │   ├── token.ts                 # Gestion JWT localStorage
│   │   ├── axios-interceptors.ts    # Intercepteurs Axios
│   │   ├── formatters.ts            # Formatage données
│   │   └── validators.ts            # Validations personnalisées
│   │
│   ├── constants/                   # Constantes
│   │   ├── categories.ts            # Catégories de lieux
│   │   ├── routes.ts                # Chemins des routes
│   │   └── apiEndpoints.ts          # Endpoints API
│   │
│   ├── App.tsx                      # Composant racine
│   ├── App.css                      # Styles globaux
│   ├── main.tsx                     # Point d'entrée
│   └── index.css                    # Styles de base
│
├── .gitignore
├── eslint.config.js                 # Configuration ESLint
├── index.html                       # HTML principal
├── package.json                     # Dépendances
├── package-lock.json
├── project                          # Spécifications du projet
├── README.md                        # Documentation
├── tsconfig.json                    # Configuration TypeScript
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                   # Configuration Vite
```

## Description des dossiers

### 📁 `/src/components/`
Composants réutilisables organisés par contexte :
- **common/** : Composants partagés (Header, Footer, Button, Modal, etc.)
- **visitor/** : Composants spécifiques à l'espace visiteur (PlaceCard, FilterBar, etc.)
- **admin/** : Composants spécifiques à l'espace admin (PlaceForm, PlaceTable, etc.)

### 📁 `/src/pages/`
Pages complètes de l'application :
- **visitor/** : Pages publiques (Accueil, Liste des lieux, Détails)
- **admin/** : Pages protégées (Login, Dashboard, Gestion)

### 📁 `/src/layouts/`
Layouts pour structurer les différentes zones :
- **VisitorLayout** : Header + Footer pour pages publiques
- **AdminLayout** : Sidebar + Header pour pages admin
- **AuthLayout** : Layout simple pour page de connexion

### 📁 `/src/store/`
Gestion d'état avec Redux Toolkit :
- **slices/** : Slices Redux pour chaque fonctionnalité
- **store.ts** : Configuration du store

### 📁 `/src/services/`
Communication avec les APIs :
- Configuration Axios
- Services pour chaque entité (auth, places, newsletter)
- Intercepteurs pour JWT

### 📁 `/src/types/`
Définitions TypeScript pour le typage fort

### 📁 `/src/schemas/`
Schémas de validation Yup pour React Hook Form

### 📁 `/src/hooks/`
Hooks personnalisés pour la logique réutilisable

### 📁 `/src/utils/`
Fonctions utilitaires (formatage, validation, etc.)

### 📁 `/src/constants/`
Constantes de l'application (catégories, routes, endpoints)

### 📁 `/src/routes/`
Configuration du routage avec React Router :
- Routes publiques et protégées
- Protection par JWT

### 📁 `/server/`
JSON Server pour backend simulé :
- **db.json** : Base de données (lieux, utilisateurs, stats)

---

## Flux de développement recommandé

1. **Configuration de base** : Types, constants, services
2. **Authentification** : Login, store auth, routes protégées
3. **Espace visiteur** : Liste lieux, filtres, détails
4. **Espace admin** : Dashboard, CRUD lieux
5. **Newsletter** : Formulaire, intégration n8n
6. **Polish** : UX, responsive, optimisations
