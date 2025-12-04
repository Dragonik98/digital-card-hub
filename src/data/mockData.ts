import { Card, Collection } from '@/types/store';

export const collections: Collection[] = [
  // Series A - 12 collections
  {
    id: 'dragons-fury',
    name: 'Dragons Fury',
    description: 'Unleash the power of ancient dragons',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 450,
  },
  {
    id: 'cyber-warriors',
    name: 'Cyber Warriors',
    description: 'Futuristic fighters from the digital realm',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 380,
  },
  {
    id: 'mystic-legends',
    name: 'Mystic Legends',
    description: 'Heroes of myth and legend',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 420,
  },
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    description: 'Creatures from the mysterious deep sea',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 350,
  },
  {
    id: 'ancient-kingdoms',
    name: 'Ancient Kingdoms',
    description: 'Warriors and rulers of forgotten empires',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 400,
  },
  {
    id: 'stellar-guardians',
    name: 'Stellar Guardians',
    description: 'Protectors of the cosmic order',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 320,
  },
  {
    id: 'forest-spirits',
    name: 'Forest Spirits',
    description: 'Magical beings of the enchanted woods',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 290,
  },
  {
    id: 'iron-legion',
    name: 'Iron Legion',
    description: 'Mechanical warriors forged in war',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 450,
  },
  {
    id: 'frost-titans',
    name: 'Frost Titans',
    description: 'Giants from the frozen wastelands',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 280,
  },
  {
    id: 'phoenix-order',
    name: 'Phoenix Order',
    description: 'Immortal warriors reborn from flames',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 360,
  },
  {
    id: 'shadow-syndicate',
    name: 'Shadow Syndicate',
    description: 'Masters of stealth and deception',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 410,
  },
  {
    id: 'thunder-clan',
    name: 'Thunder Clan',
    description: 'Storm warriors wielding lightning',
    image: '/placeholder.svg',
    series: 'A',
    cardCount: 330,
  },
  // Series B - 1 collection (expandable)
  {
    id: 'shadow-realm',
    name: 'Shadow Realm',
    description: 'Creatures from the darkest dimensions',
    image: '/placeholder.svg',
    series: 'B',
    cardCount: 250,
  },
];

// Generate cards for each collection (sample cards, up to 450 per collection)
export const generateCardsForCollection = (collectionId: string, count: number = 24): Card[] => {
  const collection = collections.find(c => c.id === collectionId);
  if (!collection) return [];

  const rarities: Card['rarity'][] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const cardNames = [
    'Guardian', 'Striker', 'Defender', 'Hunter', 'Mage', 'Warrior', 'Assassin', 
    'Healer', 'Tank', 'Ranger', 'Sorcerer', 'Knight', 'Archer', 'Paladin',
    'Berserker', 'Wizard', 'Rogue', 'Cleric', 'Druid', 'Monk', 'Shaman',
    'Necromancer', 'Summoner', 'Enchanter'
  ];
  
  const adjectives = [
    'Shadow', 'Flame', 'Ice', 'Thunder', 'Wind', 'Earth', 'Light', 'Dark',
    'Crystal', 'Storm', 'Iron', 'Golden', 'Silver', 'Ancient', 'Mystic',
    'Celestial', 'Infernal', 'Divine', 'Arcane', 'Primal'
  ];

  return Array.from({ length: Math.min(count, collection.cardCount) }, (_, i) => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    const baseName = cardNames[i % cardNames.length];
    const adj = adjectives[Math.floor(i / cardNames.length) % adjectives.length];
    
    const prices = {
      common: 4.99,
      uncommon: 9.99,
      rare: 14.99,
      epic: 24.99,
      legendary: 39.99,
    };

    return {
      id: `${collectionId}-card-${i + 1}`,
      name: `${adj} ${baseName}`,
      description: `A powerful ${rarity} card from the ${collection.name} collection`,
      price: prices[rarity],
      image: '/placeholder.svg',
      series: collection.series,
      collection: collection.name,
      rarity,
      inStock: Math.random() > 0.1,
    };
  });
};

// Featured cards for homepage
export const featuredCards: Card[] = [
  {
    id: 'card-1',
    name: 'Inferno Drake',
    description: 'A legendary dragon wreathed in eternal flames',
    price: 29.99,
    image: '/placeholder.svg',
    series: 'A',
    collection: 'Dragons Fury',
    rarity: 'legendary',
    inStock: true,
  },
  {
    id: 'card-2',
    name: 'Neon Striker',
    description: 'Elite cyber warrior with enhanced reflexes',
    price: 14.99,
    image: '/placeholder.svg',
    series: 'A',
    collection: 'Cyber Warriors',
    rarity: 'epic',
    inStock: true,
  },
  {
    id: 'card-3',
    name: 'Shadow Wraith',
    description: 'A spectral assassin from the void',
    price: 19.99,
    image: '/placeholder.svg',
    series: 'B',
    collection: 'Shadow Realm',
    rarity: 'rare',
    inStock: true,
  },
  {
    id: 'card-4',
    name: 'Storm Titan',
    description: 'Master of thunder and lightning',
    price: 24.99,
    image: '/placeholder.svg',
    series: 'A',
    collection: 'Thunder Clan',
    rarity: 'epic',
    inStock: true,
  },
  {
    id: 'card-5',
    name: 'Void Walker',
    description: 'Traveler between dimensions',
    price: 34.99,
    image: '/placeholder.svg',
    series: 'A',
    collection: 'Stellar Guardians',
    rarity: 'legendary',
    inStock: false,
  },
  {
    id: 'card-6',
    name: 'Phoenix Guardian',
    description: 'Immortal protector reborn from ashes',
    price: 27.99,
    image: '/placeholder.svg',
    series: 'A',
    collection: 'Phoenix Order',
    rarity: 'legendary',
    inStock: true,
  },
];

export const DISCORD_LINK = 'https://discord.gg/your-server';

// Language options for card purchase
export const LANGUAGES = [
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'jp', name: 'Japanese', flag: '🇯🇵' },
] as const;

export type LanguageCode = typeof LANGUAGES[number]['code'];

// Price configuration (can vary by language/series/card)
export const getPriceForCard = (card: Card, language: LanguageCode): number => {
  // Base price from card
  let price = card.price;
  
  // Language multiplier (example: Japanese cards cost more)
  const languageMultipliers: Record<LanguageCode, number> = {
    it: 1.0,
    en: 1.0,
    jp: 1.2,
  };
  
  return Number((price * languageMultipliers[language]).toFixed(2));
};
