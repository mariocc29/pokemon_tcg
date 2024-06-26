import axios from 'axios';
import { config } from '@/config';

export const getTypes = async () => {
  try {
    const response = await axios.get(`${config.POKEMON_TCG_API}/types`);
    return response.data;
  } catch (error) {
    throw error;
  }
};