export type Locale = 'en' | 'fr';

export type TranslationKey =
  // Home page
  | 'home.welcome'
  | 'home.subtitle'
  | 'home.getStarted'
  | 'home.learnMore'
  | 'home.howItWorks'
  | 'home.betterWay'
  | 'home.features.listBooks'
  | 'home.features.listBooksDesc'
  | 'home.features.findMatches'
  | 'home.features.findMatchesDesc'
  | 'home.features.exchange'
  | 'home.features.exchangeDesc'
  
  // Auth
  | 'auth.login'
  | 'auth.register'
  | 'auth.email'
  | 'auth.password'
  | 'auth.name'
  | 'auth.logout'
  | 'auth.noAccount'
  | 'auth.haveAccount'
  | 'auth.useAdmin'
  | 'auth.adminCredentials'
  | 'auth.loading'
  
  // Navigation
  | 'nav.home'
  | 'nav.search'
  | 'nav.profile'
  | 'nav.suggestions'
  | 'nav.history'
  
  // Profile
  | 'profile.title'
  | 'profile.editProfile'
  | 'profile.saveProfile'
  | 'profile.location'
  | 'profile.bio'
  | 'profile.myBooks'
  | 'profile.addBook'
  | 'profile.removeBook'
  
  // Book Search
  | 'search.title'
  | 'search.bookInput'
  | 'search.locationInput'
  | 'search.searchButton'
  | 'search.requestBook'
  
  // Suggestions
  | 'suggestions.title'
  | 'suggestions.theyHave'
  | 'suggestions.theyWant'
  | 'suggestions.message'
  | 'suggestions.propose'
  
  // History
  | 'history.title'
  | 'history.date'
  | 'history.partner'
  | 'history.exchanged'
  | 'history.status';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    // Home page
    'home.welcome': 'Share the joy of reading',
    'home.subtitle': 'Join our growing community of book lovers. Exchange books, discover new stories, and connect with fellow readers in your area.',
    'home.getStarted': 'Get Started',
    'home.learnMore': 'Learn More',
    'home.howItWorks': 'How it works',
    'home.betterWay': 'A better way to share books',
    'home.features.listBooks': 'List your books',
    'home.features.listBooksDesc': 'Add books you\'re willing to share and create your wishlist of books you\'d like to read.',
    'home.features.findMatches': 'Find matches',
    'home.features.findMatchesDesc': 'Our system matches you with other readers who have the books you want and want the books you have.',
    'home.features.exchange': 'Exchange & enjoy',
    'home.features.exchangeDesc': 'Meet up locally to exchange books and discover your next favorite read.',

    // Auth
    'auth.login': 'Sign In',
    'auth.register': 'Sign Up',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.logout': 'Sign Out',
    'auth.noAccount': 'Don\'t have an account?',
    'auth.haveAccount': 'Already have an account?',
    'auth.useAdmin': 'Use Admin Account',
    'auth.adminCredentials': 'Admin Credentials',
    'auth.loading': 'Loading...',

    // Navigation
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.profile': 'Profile',
    'nav.suggestions': 'Suggestions',
    'nav.history': 'History',

    // Profile
    'profile.title': 'Profile',
    'profile.editProfile': 'Edit Profile',
    'profile.saveProfile': 'Save Profile',
    'profile.location': 'Location',
    'profile.bio': 'Bio',
    'profile.myBooks': 'My Books',
    'profile.addBook': 'Add Book',
    'profile.removeBook': 'Remove Book',

    // Book Search
    'search.title': 'Find Books',
    'search.bookInput': 'Enter title or author...',
    'search.locationInput': 'Enter your location...',
    'search.searchButton': 'Search Books',
    'search.requestBook': 'Request Book',

    // Suggestions
    'suggestions.title': 'Exchange Suggestions',
    'suggestions.theyHave': 'They have:',
    'suggestions.theyWant': 'They want:',
    'suggestions.message': 'Message',
    'suggestions.propose': 'Propose Exchange',

    // History
    'history.title': 'Exchange History',
    'history.date': 'Date',
    'history.partner': 'Exchange Partner',
    'history.exchanged': 'Books Exchanged',
    'history.status': 'Status'
  },
  fr: {
    // Page d'accueil
    'home.welcome': 'Partagez le plaisir de la lecture',
    'home.subtitle': 'Rejoignez notre communauté grandissante de passionnés de lecture. Échangez des livres, découvrez de nouvelles histoires et connectez-vous avec d\'autres lecteurs près de chez vous.',
    'home.getStarted': 'Commencer',
    'home.learnMore': 'En savoir plus',
    'home.howItWorks': 'Comment ça marche',
    'home.betterWay': 'Une meilleure façon de partager les livres',
    'home.features.listBooks': 'Listez vos livres',
    'home.features.listBooksDesc': 'Ajoutez les livres que vous souhaitez partager et créez votre liste de souhaits.',
    'home.features.findMatches': 'Trouvez des correspondances',
    'home.features.findMatchesDesc': 'Notre système vous met en relation avec d\'autres lecteurs qui ont les livres que vous voulez et qui veulent les vôtres.',
    'home.features.exchange': 'Échangez et profitez',
    'home.features.exchangeDesc': 'Rencontrez-vous localement pour échanger des livres et découvrir votre prochaine lecture préférée.',

    // Authentification
    'auth.login': 'Se connecter',
    'auth.register': 'S\'inscrire',
    'auth.email': 'Adresse email',
    'auth.password': 'Mot de passe',
    'auth.name': 'Nom complet',
    'auth.logout': 'Déconnexion',
    'auth.noAccount': 'Pas encore de compte ?',
    'auth.haveAccount': 'Déjà un compte ?',
    'auth.useAdmin': 'Utiliser le compte Admin',
    'auth.adminCredentials': 'Identifiants Admin',
    'auth.loading': 'Chargement...',

    // Navigation
    'nav.home': 'Accueil',
    'nav.search': 'Rechercher',
    'nav.profile': 'Profil',
    'nav.suggestions': 'Suggestions',
    'nav.history': 'Historique',

    // Profil
    'profile.title': 'Profil',
    'profile.editProfile': 'Modifier le profil',
    'profile.saveProfile': 'Enregistrer',
    'profile.location': 'Localisation',
    'profile.bio': 'Biographie',
    'profile.myBooks': 'Mes Livres',
    'profile.addBook': 'Ajouter un livre',
    'profile.removeBook': 'Retirer le livre',

    // Recherche de livres
    'search.title': 'Rechercher des livres',
    'search.bookInput': 'Entrez un titre ou un auteur...',
    'search.locationInput': 'Entrez votre localisation...',
    'search.searchButton': 'Rechercher',
    'search.requestBook': 'Demander le livre',

    // Suggestions
    'suggestions.title': 'Suggestions d\'échange',
    'suggestions.theyHave': 'Ils ont :',
    'suggestions.theyWant': 'Ils veulent :',
    'suggestions.message': 'Message',
    'suggestions.propose': 'Proposer un échange',

    // Historique
    'history.title': 'Historique des échanges',
    'history.date': 'Date',
    'history.partner': 'Partenaire d\'échange',
    'history.exchanged': 'Livres échangés',
    'history.status': 'Statut'
  }
};