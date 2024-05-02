export interface CardsDeckData {
  id: string
  name: string
  image: string
}

export default interface DeckData {
  id: number;
  label: string;
  category: string;
  cards: CardsDeckData[];
}