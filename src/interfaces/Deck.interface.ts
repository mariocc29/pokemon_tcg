export interface Cards {
  id: string
  name: string
  image: string
}

export interface Deck {
  id: number;
  label: string;
  category: string;
  cards: Cards[];
}