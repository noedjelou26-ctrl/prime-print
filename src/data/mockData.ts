import { ServiceItem, PortfolioItem, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'Eliano Prime Print',
  tagline: 'Infographie et Design Print de Haute Qualité',
  city: 'Lomé',
  country: 'Togo',
  address: 'Lomé, Togo (Livraison dans tout le pays & sous-région)',
  phone: '+228 90 26 36 00',
  phoneRaw: '22890263600',
  email: 'elianoprimeprint@gmail.com',
  workingHours: 'Lun - Sam : 08h00 - 19h30',
  whatsappMessage: 'Bonjour Eliano Prime Print, je souhaite discuter d\'un projet de design / impression.',
  socials: {
    whatsapp: 'https://wa.me/22890263600',
    instagram: 'https://instagram.com/elianoprimeprint',
    tiktok: 'https://tiktok.com/@elianoprimeprint',
    facebook: 'https://facebook.com/elianoprimeprint'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'tableau',
    title: 'Tableaux Décoratifs & Toiles',
    category: 'Décoration murale',
    description: 'Tableaux d\'art modernes, portraits personnalisés et impressions haute définition sur toiles canvas avec encadrement sur-mesure.',
    startingPrice: '15.000 FCFA',
    iconName: 'Layers',
    popular: true,
    features: [
      'Toile canvas grain fin de qualité galerie',
      'Châssis en bois massif durable',
      'Couleurs vibrantes résistantes aux UV',
      'Formats personnalisés (du 30x40cm au 120x80cm+)'
    ]
  },
  {
    id: 'affiche',
    title: 'Affiches & Bâches Publicitaires',
    category: 'Grand format & Publicité',
    description: 'Bâches grand format, affiches événementielles, roll-up, kakemonos et panneaux pour maximiser votre visibilité extérieure.',
    startingPrice: '10.000 FCFA',
    iconName: 'LayoutGrid',
    popular: true,
    features: [
      'Bâche PVC 510g/m² ultra-résistante aux intempéries',
      'Œillets métalliques & ourlets renforcés',
      'Impression éco-solvant haute résolution',
      'Roll-up et structures mobiles incluses selon options'
    ]
  },
  {
    id: 'logo',
    title: 'Logos & Identité Visuelle',
    category: 'Branding & Design',
    description: 'Conception de logos vectoriels distinctifs, chartes graphiques complètes et systèmes visuels qui valorisent l\'image de votre marque.',
    startingPrice: '25.000 FCFA',
    iconName: 'Palette',
    popular: false,
    features: [
      '3 propositions de concepts originaux',
      'Fichiers vectoriels complets (AI, EPS, PDF, PNG, SVG)',
      'Déclinaisons pour réseaux sociaux & print',
      'Guide d\'utilisation des couleurs et polices'
    ]
  },
  {
    id: 'conception',
    title: 'Conception Graphique PAO',
    category: 'Design graphique',
    description: 'Création de flyers percutants, dépliants 3 volets, cartes de visite de prestige, menus de restaurant et catalogues commerciaux.',
    startingPrice: '10.000 FCFA',
    iconName: 'BookOpen',
    popular: false,
    features: [
      'Mise en page éditoriale et publicitaire',
      'Cartes de visite avec vernis sélectif / mat',
      'Fichiers prêts pour impression (CMJN 300 DPI)',
      'Retouches illimitées jusqu\'à validation'
    ]
  },
  {
    id: 'tshirt',
    title: 'T-shirts & Textiles Personnalisés',
    category: 'Personnalisation textile',
    description: 'Impression textile de pointe : DTF (Direct to Film), sérigraphie et flocage haute densité pour vos t-shirts, polos, maillots et uniformes.',
    startingPrice: '5.000 FCFA',
    iconName: 'Shirt',
    popular: true,
    features: [
      'Textiles 100% coton peigné de qualité supérieure',
      'Technologie DTF pour des détails ultra-précis',
      'Excellente tenue au lavage répété (40°C)',
      'Commandes à l\'unité ou en grande série'
    ]
  },
  {
    id: 'tasse',
    title: 'Tasses Magiques & Goodies',
    category: 'Objets promotionnels',
    description: 'Mugs thermosensibles magiques (le visuel apparaît avec l\'eau chaude), tasses personnalisées en céramique, gourdes, casquettes et stylos.',
    startingPrice: '3.500 FCFA',
    iconName: 'Coffee',
    popular: false,
    features: [
      'Céramique brillante de haute qualité',
      'Effet magique thermique spectaculaire',
      'Impression par sublimation inaltérable',
      'Emballage individuel prêt à offrir'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Bâche Publicitaire Grand Format - Événementiel',
    category: 'affiches',
    categoryLabel: 'Affiches & Bâches',
    image: '/images/bash.jpeg',
    altText: 'Bâche publicitaire grand format imprimée par Eliano Prime Print',
    description: 'Impression sur bâche vinyle 550g avec œillets de fixation pour un événement corporatif à Lomé. Résistance maximale au soleil et aux intempéries.',
    technique: 'Impression Éco-solvant 1440 DPI + Finition œillets',
    client: 'Festival & Conférence Tech Lomé'
  },
  {
    id: 'p-2',
    title: 'T-shirt Personnalisé Streetwear & Urban Brand',
    category: 'textiles',
    categoryLabel: 'Textiles & T-shirts',
    image: '/images/tricot.jpeg',
    altText: 'T-shirt streetwear personnalisé DTF',
    description: 'Série de t-shirts 100% coton lourd noir avec illustration graphique imprimée en DTF multicouche pour un rendu aux couleurs éclatantes.',
    technique: 'Impression DTF HD + Pressage thermique haute pression',
    client: 'Marque de vêtement Urban Lomé'
  },
  {
    id: 'p-3',
    title: 'Collection de Polos & T-shirts Corporate',
    category: 'textiles',
    categoryLabel: 'Textiles & T-shirts',
    image: '/images/elike.jpeg',
    altText: 'Polos et t-shirts d\'entreprise personnalisés',
    description: 'Personnalisation de tenues professionnelles avec logo poitrine en broderie/flocage et slogan dorsal pour équipe commerciale.',
    technique: 'Flocage Flex Premium et DTF',
    client: 'Agence Commerciale Lomé'
  },
  {
    id: 'p-4',
    title: 'Tableau Décoratif Artistique - Toile Africaine Moderne',
    category: 'tableaux',
    categoryLabel: 'Tableaux Décoratifs',
    image: '/images/table1.jpeg',
    altText: 'Tableau décoratif sur toile canvas moderne',
    description: 'Création graphique originale imprimée sur toile canvas 380g avec cadre flottant en bois noir pour décoration de salon et bureau.',
    technique: 'Impression Fine Art 12 couleurs + Vernis protecteur mat',
    client: 'Résidence privée & Décoration d\'intérieur'
  },
  {
    id: 'p-5',
    title: 'Tableau Portrait Abstrait & Typographique',
    category: 'tableaux',
    categoryLabel: 'Tableaux Décoratifs',
    image: '/images/table2.jpeg',
    altText: 'Tableau déco contemporain',
    description: 'Composition abstraite aux teintes chaudes et dorées, finition satinée haut de gamme avec cadre sur mesure.',
    technique: 'Toile tendue sur châssis biseauté en pin',
    client: 'Espace Coworking Lomé'
  },
  {
    id: 'p-6',
    title: 'Identité Visuelle & Conception Graphique Brochure',
    category: 'conception' as any,
    categoryLabel: 'Conception Graphique',
    image: '/images/concept.jpeg',
    altText: 'Conception graphique et support print',
    description: 'Création de supports de communication globale : plaquettes commerciales, flyers promotionnels et cartes de visite vernis sélectif.',
    technique: 'PAO Vectorielle Adobe Suite + Papier couché 350g mat',
    client: 'Entreprise de Services & Logistique'
  },
  {
    id: 'p-7',
    title: 'Logo & Charte Graphique Moderne',
    category: 'logos',
    categoryLabel: 'Logos & Branding',
    image: '/images/logo1.jpg',
    altText: 'Création de logo et identité visuelle',
    description: 'Design de logotype minimaliste et impactant avec déclinaisons pour tous types de supports print et digitaux.',
    technique: 'Création vectorielle Illustrator',
    client: 'Start-up Tech & E-commerce'
  },
  {
    id: 'p-8',
    title: 'Tasses Magiques Thermosensibles & Goodies',
    category: 'goodies',
    categoryLabel: 'Tasses & Goodies',
    image: '/images/tasse.jpg',
    altText: 'Mug magique thermosensible personnalisé',
    description: 'Tasses magiques noires qui révèlent la photo ou le message personnalisé au contact d\'une boisson chaude (thé, café).',
    technique: 'Sublimation thermique 200°C sur céramique thermosensible',
    client: 'Cadeaux personnalisés & Entreprises'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Koffi Mensah',
    role: 'Directeur Marketing',
    company: 'InnovTogo Lomé',
    comment: 'Qualité d\'impression exceptionnelle pour nos bâches et roll-ups de lancement. Couleurs très fidèles à notre charte graphique et livraison dans les délais.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Afiwa Lawson',
    role: 'Fondatrice de Marque',
    company: 'Lawson Fashion',
    comment: 'Eliano a imprimé nos t-shirts de collection en DTF. Le toucher est ultra doux et les détails graphiques sont impeccables même après plusieurs lavages.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Jean-Luc Amégan',
    role: 'Architecte d\'Intérieur',
    company: 'Lomé Déco Studio',
    comment: 'Les tableaux décoratifs sur toile commandés pour nos clients ont transformé leurs espaces. Le rendu des couleurs et la solidité des châssis sont au top.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const SPECIALTIES = [
  { title: 'Bâches & Grands Formats', desc: 'Bâches PVC, kakemonos, panneaux publicitaires résistants.' },
  { title: 'Tableaux & Décoration Murale', desc: 'Toiles artistiques, portraits et impressions canvas d\'exception.' },
  { title: 'Logos & Chartes Graphiques', desc: 'Identités visuelles marquantes et systèmes graphiques pérennes.' },
  { title: 'Tasses Magiques & Goodies', desc: 'Mugs thermosensibles et objets promotionnels personnalisés.' },
  { title: 'Textiles & T-shirts DTF', desc: 'Impression sur t-shirts, polos et casquettes haute tenue.' },
  { title: 'Conception PAO & Packaging', desc: 'Flyers, cartes de visite, dépliants et brochures de standing.' }
];
