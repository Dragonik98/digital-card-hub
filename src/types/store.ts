export interface Card {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  series: 'A' | 'B';
  collection: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  inStock: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  series: 'A' | 'B';
  cardCount: number;
}

export interface CartItem {
  card: Card;
  quantity: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
