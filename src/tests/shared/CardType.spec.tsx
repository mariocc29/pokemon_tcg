import { render, fireEvent } from '@testing-library/react';
import { CardType } from '@/shared';

describe('CardType component', () => {
  const mockProps = {
    kindOf: 'mock-kind',
    isSelected: false,
    onClick: jest.fn(),
  };

  it('renders kindOf correctly', () => {
    const { getByText } = render(<CardType {...mockProps} />);
    const kindOfElement = getByText(mockProps.kindOf);
    expect(kindOfElement).toBeInTheDocument();
  });

  it('renders isSelected correctly', () => {
    const { container } = render(<CardType {...mockProps} />);
    const inputElement = container.querySelector('input[type="radio"]') as HTMLInputElement;
    expect(inputElement.checked).toBe(mockProps.isSelected);
  });

  it('calls onClick function when clicked', () => {
    const { getByText } = render(<CardType {...mockProps} />);
    const kindOfElement = getByText(mockProps.kindOf);
    fireEvent.click(kindOfElement);
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
