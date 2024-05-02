import { useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import { DeckEmptyState } from '@/layouts';

jest.mock('react-router-dom');

describe('DeckEmptyState', () => {
  it('should render correctly', () => {
    const { getByText } = render(<DeckEmptyState />);

    expect(getByText('Your deck awaits')).toBeInTheDocument();
    expect(getByText('Add cards to your deck based on their type, and they will magically appear here.')).toBeInTheDocument();
    expect(getByText('Forge your first PokeDeck here')).toBeInTheDocument();
  });

  it('should navigate to /deck/new when button is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText } = render(<DeckEmptyState />);

    fireEvent.click(getByText('Forge your first PokeDeck here'));

    expect(navigateMock).toHaveBeenCalledWith('/deck/new');
  });
});
