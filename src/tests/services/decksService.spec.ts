import axios from 'axios';
import { createDeck, getDecks } from '@/services';
import { config } from '@/config';
import { DeckData } from '@/interfaces/deck_data';

jest.mock('axios');

const mockDeck:DeckData = {
  id: 1,
  label: 'Mock Deck',
  category: 'mock-category',
  cards: [
    {id: 'pic001', name:'Picachu', image: 'http://example.com/image.png'}
  ]
};

describe('createDeck', () => {
  
  it('should create a new deck', async () => {
    const mockDeckData = {
      label: 'My Deck',
      category: 'Pokemon'
    };
    const mockResponseData = { ...mockDeck };
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const response = await createDeck(mockDeckData);

    expect(response).toEqual(mockResponseData);
    expect(axios.post).toHaveBeenCalledWith(
      `${config.POKEMON_TCG_API}/decks`,
      mockDeckData
    );
  });

  it('should throw an error if creating a deck fails', async () => {
    const mockDeckData = {
      label: 'My Deck',
      category: 'Pokemon'
    };
    const mockError = new Error('Failed to create deck');
    (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(createDeck(mockDeckData)).rejects.toThrow(mockError);
  });
});

describe('getDecks', () => {
  it('should fetch decks', async () => {
    const mockResponseData = [{ ...mockDeck }];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const response = await getDecks();

    expect(response).toEqual(mockResponseData);
    expect(axios.get).toHaveBeenCalledWith(
      `${config.POKEMON_TCG_API}/decks`
    );
  });

  it('should throw an error if fetching decks fails', async () => {
    const mockError = new Error('Failed to fetch decks');
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getDecks()).rejects.toThrow(mockError);
  });
});
