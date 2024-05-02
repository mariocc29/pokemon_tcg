import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeckData } from '@/interfaces/deck_data';
import { store } from '@/state/store';
import { DeckMain } from '@/layouts';
import { useLocalStorage } from '@/hooks/useLocalStorage';

jest.mock('react-router-dom');
jest.mock('@/hooks/useLocalStorage');

const mockDecks: DeckData[] = [
  { id: 1, label: 'Deck 1', category: 'grass', cards: [{id: 'pic001', name:'Bulbasaur', image: 'http://example.com/image.png'}]},
  { id: 2, label: 'Deck 2', category: 'fire', cards: [{id: 'pic002', name:'Charmander', image: 'http://example.com/image.png'}]},
];

describe('DeckMain', () => {
  it('should render correctly', () => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      getItem: jest.fn().mockReturnValue(['grass', 'fire'])
    });

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <DeckMain decks={mockDecks} />
      </Provider>
    );

    expect(getByText('Decks:')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Forge a new PokeDeck' })).toBeInTheDocument();
    expect(getByText('Show all')).toBeInTheDocument();
  });

  it('should display decks based on selected type', () => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      getItem: jest.fn().mockReturnValue(['grass', 'fire'])
    });

    const { getByText, queryByText, getByLabelText } = render(
      <Provider store={store}>
        <DeckMain decks={mockDecks} />
      </Provider>
    );

    fireEvent.change(getByLabelText('Select deck type'), { target: { value: 'Grass' } });

    expect(getByText('Deck 1')).toBeInTheDocument();
    expect(queryByText('Deck 2')).toBeNull();
  });

  it('should navigate to /deck/new when "Forge a new PokeDeck" button is clicked', () => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      getItem: jest.fn().mockReturnValue(['grass', 'fire'])
    });
    
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText } = render(
      <Provider store={store}>
        <DeckMain decks={mockDecks} />
      </Provider>
    );

    fireEvent.click(getByText('Forge a new PokeDeck'));

    expect(navigateMock).toHaveBeenCalledWith('/deck/new');
  });

  it('should dispatch toggleDeck action when a deck is clicked', () => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      getItem: jest.fn().mockReturnValue(['grass', 'fire'])
    });
    
    const { getByText } = render(
      <Provider store={store}>
        <DeckMain decks={mockDecks} />
      </Provider>
    );

    fireEvent.click(getByText('Deck 1'));

    const expected_state = {
      deck: { id: 1, label: 'Deck 1', category: 'grass', cards: [{id: 'pic001', name:'Bulbasaur', image: 'http://example.com/image.png'}]}
    };
    
    expect(store.getState().deck).toEqual(expected_state);
  });
});
