import axios from 'axios';

import { usePokemonTypes } from '@/hooks';

jest.mock('axios');

describe('getTypes', () => {
  it('should fetch types', async () => {
    const mockResponseData = ['fire', 'grass', 'water'];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const { getTypes } = usePokemonTypes();
    const response = await getTypes();

    expect(response).toEqual(mockResponseData);
  });

  it('should throw an error if fetching types fails', async () => {
    const mockError = new Error('Failed to fetch types');
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { getTypes } = usePokemonTypes();

    await expect(getTypes()).rejects.toThrow(mockError);
  });
});