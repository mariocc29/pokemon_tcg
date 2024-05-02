import { fireEvent, render } from '@testing-library/react';
import { CardDeck } from '@/shared';
import DeckData from '@/interfaces/deck_data';

describe('CardDeck component', () => {
  const mockDeck:DeckData = {
    id: 1,
    label: 'Mock Deck',
    category: 'mock-category',
    cards: [
      {id: 'pic001', name:'Picachu', image: 'http://example.com/image.png'}
    ]
  };

  it('renders deck label correctly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<CardDeck deck={mockDeck} onClick={onClickMock} />);
    const labelElement = getByText(mockDeck.label);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders deck category correctly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<CardDeck deck={mockDeck} onClick={onClickMock} />);
    const categoryElement = getByText(mockDeck.category);
    expect(categoryElement).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<CardDeck deck={mockDeck} onClick={onClickMock} />);
    const deckElement = getByText(mockDeck.category);
    fireEvent.click(deckElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
