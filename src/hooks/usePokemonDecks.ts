import axios from "axios";

import { config } from "@/config";
import { Deck } from "@/interfaces/Deck.interface";
import { DeckPost } from "@/interfaces/DeckPost.interface";

export const usePokemonDecks = () => {
  const create = async (data: DeckPost): Promise<Deck> => {
    try {
      const response = await axios.post(`${config.POKEMON_TCG_API}/decks`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return { create }
}