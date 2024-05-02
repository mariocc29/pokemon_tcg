interface CardsDeckData {
  image: string
}

export default interface DeckData {
  id: number;
  label: string;
  category: string;
  cards: CardsDeckData[];
}