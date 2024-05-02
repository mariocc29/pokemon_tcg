import axios from 'axios';
import { getTypes } from '@/services';
import { config } from '@/config';

jest.mock('axios');

describe('getTypes', () => {
  it('should fetch types', async () => {
    const mockResponseData = ['fire', 'grass', 'water'];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const response = await getTypes();

    expect(response).toEqual(mockResponseData);
    expect(axios.get).toHaveBeenCalledWith(
      `${config.POKEMON_TCG_API}/types`
    );
  });

  it('should throw an error if fetching types fails', async () => {
    const mockError = new Error('Failed to fetch types');
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getTypes()).rejects.toThrow(mockError);
  });
});
