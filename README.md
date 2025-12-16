# IUFMES - Frontend

Site web officiel de l'Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icônes**: Lucide React
- **Formulaires**: React Hook Form + Zod
- **HTTP Client**: Axios

## 📁 Structure

```
src/
├── app/                          # Pages Next.js (App Router)
│   ├── about/                    # Page À propos
│   ├── admin/                    # Dashboard admin
│   │   └── login/                # Page de connexion admin
│   ├── admissions/               # Page Admissions & Tarifs
│   ├── contact/                  # Page Contact
│   ├── programs/                 # Pages Programmes
│   │   └── [slug]/               # Page détail programme (dynamique)
│   ├── team/                     # Page Équipe
│   ├── mentions-legales/         # Mentions légales
│   ├── politique-confidentialite/ # Politique de confidentialité
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   └── not-found.tsx             # Page 404
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation principale
│   │   └── Footer.tsx            # Pied de page
│   ├── sections/                 # Sections réutilisables
│   │   ├── Hero.tsx              # Section hero
│   │   ├── Stats.tsx             # Statistiques
│   │   ├── ProgramCards.tsx      # Cartes programmes
│   │   ├── About.tsx             # Section à propos
│   │   ├── Team.tsx              # Équipe (pyramide hiérarchique)
│   │   ├── Stages.tsx            # Lieux de stages
│   │   ├── Partners.tsx          # Partenaires
│   │   ├── Contact.tsx           # Section contact
│   │   ├── Admissions.tsx        # Tarifs et admissions
│   │   └── VideoModal.tsx        # Modal vidéo
│   └── ContactForm.tsx           # Formulaire de contact
├── lib/
│   ├── api.ts                    # Client Axios configuré
│   └── utils.ts                  # Utilitaires
└── types/
    └── index.ts                  # Types TypeScript

```

## 🎨 Pages Disponibles

### Pages Publiques
- `/` - Page d'accueil (Hero, Stats, Programmes, À propos, Équipe, Stages, Partenaires, Contact)
- `/about` - À propos de l'IUFMES
- `/programs` - Liste des filières
- `/programs/[slug]` - Détail d'un programme (dynamique, connecté au backend)
- `/team` - Notre équipe (structure pyramidale)
- `/admissions` - Tarifs et procédure d'inscription
- `/contact` - Formulaire de contact
- `/mentions-legales` - Mentions légales
- `/politique-confidentialite` - Politique de confidentialité

### Pages Admin
- `/admin/login` - Connexion administrateur
- `/admin` - Dashboard (gestion des messages de contact)

### Pages Système
- `/not-found` - Page 404 personnalisée

## 🔌 Connexion Backend

Le frontend communique avec le backend via Axios :

### Endpoints utilisés
- `GET /api/programs` - Liste des programmes (ProgramCards)
- `GET /api/programs/:slug` - Détail d'un programme
- `POST /api/contact` - Envoi de message de contact
- `POST /api/auth/login` - Connexion admin
- `GET /api/contact` - Liste des messages (admin)
- `PATCH /api/contact/:id` - Mise à jour statut message (admin)

### Configuration
Fichier `.env.local` :
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🎨 Design System

### Couleurs
- **Primary**: `#00337a` (Bleu profond)
- **Secondary**: `#0066cc` (Bleu clair)
- **Accent**: `#00e68a` (Vert menthe)

### Typographie
- Police: Inter (Google Font)
- Tailles: Responsive avec Tailwind

## 🚀 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## ✨ Fonctionnalités

### Accessibilité
- Navigation au clavier
- Skip to main content
- Contraste WCAG AA
- Attributs ARIA

### SEO
- Métadonnées optimisées
- Sitemap automatique
- URLs propres (slugs)

### Performance
- Images optimisées (Next.js Image)
- Code splitting automatique
- Lazy loading

### Responsive
- Mobile-first design
- Breakpoints Tailwind
- Menu hamburger mobile

## 📝 Notes

- Les programmes sont maintenant **dynamiques** (récupérés depuis le backend)
- L'équipe est affichée en **pyramide hiérarchique**
- Toutes les pages sont **complètes et fonctionnelles**
- Le site est **100% responsive**
- **SEO optimisé** avec métadonnées sur toutes les pages
