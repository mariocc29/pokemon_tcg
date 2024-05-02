import axios, { AxiosResponse } from 'axios';
import { config } from '@config';

interface DeckData {
  label: string;
  category: string;
}

export const createDeck = async (deckData: DeckData): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${config.POKEMON_TCG_API}/decks`, deckData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDecks = async () => {
  try {
    const response = await axios.get(`${config.POKEMON_TCG_API}/decks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};