import { render, fireEvent } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux'; 
import { store } from '@/state/store';
import { ShowDeck } from '@/layouts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('ShowDeck', () => {
  let mockUseSelector: jest.MockedFunction<typeof useSelector>;
  let mockUseDispatch: jest.MockedFunction<typeof useDispatch>;

  beforeEach(() => {
    mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;
    mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;
    mockUseSelector.mockClear();
    mockUseDispatch.mockClear();
  });

  xit('should render correctly with deck information', () => {
    const mockDeck = {
      id: 1,
      label: 'Test Deck',
      category: 'grass',
      cards: [
        { id: 'pic001', name: 'Bulbasaur', image: 'http://example.com/image1.png' },
        { id: 'pic002', name: 'Ivysaur', image: 'http://example.com/image2.png' },
      ],
    };

    mockUseSelector.mockReturnValueOnce({ deck: mockDeck });

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <ShowDeck />
      </Provider>
    );

    expect(getByText('Test Deck')).toBeInTheDocument();
    expect(getByText('grass')).toBeInTheDocument();
    expect(getByAltText('Bulbasaur')).toBeInTheDocument();
    expect(getByAltText('Ivysaur')).toBeInTheDocument();
  });

  it('should dispatch toggleDeck action when back button is clicked', () => {
    const mockDispatch = jest.fn();
    mockUseDispatch.mockReturnValueOnce(mockDispatch);
    mockUseSelector.mockReturnValueOnce({ deck: null });

    const { getByAltText } = render(
      <Provider store={store}>
        <ShowDeck />
      </Provider>
    );

    fireEvent.click(getByAltText('Go Home!'));

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'deck/toggle', payload: null });
  });
});
