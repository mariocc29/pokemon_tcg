import axios from 'axios';

import { config } from '@/config';
import { Deck } from '@/interfaces/Deck.interface';
import { usePokemonDecks } from '@/hooks';
import { DeckPost } from '@/interfaces/DeckPost.interface';

jest.mock('axios');


describe('create', () => {
  
  const mockInput:DeckPost = {
    label: 'My Deck',
    category: 'lighting'
  };
  
  const mockResponse:Deck = {
    id: 1,
    label: 'Mock Deck',
    category: 'lighting',
    cards: [
      {id: 'pic001', name:'Picachu', image: 'http://example.com/image.png'}
    ]
  };
  
  it('should create a new deck', async () => {
    
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockResponse });

    const { create } = usePokemonDecks();
    const response = await create( mockInput );

    expect(response).toEqual( mockResponse );
    expect(axios.post).toHaveBeenCalledWith(`${config.POKEMON_TCG_API}/decks`, mockInput);
  });

  it('should throw an error if creating a deck fails', async () => {
    const mockError = new Error('Failed to create deck');
    (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

    const { create } = usePokemonDecks();

    await expect(create(mockInput)).rejects.toThrow(mockError);
  });
});