import { fireEvent, render } from "@testing-library/react";

import { CardType } from "@/molecules/CardType/CardType";

describe('CardType Component', () => {

  const isSelected = false
  const onClickMock = jest.fn();
  const kindOf = 'default'

  it('applies custom CSS classes to the component', () => {
    const { container } = render(<CardType kindOf={kindOf} onClick={onClickMock} isSelected={isSelected} />);
    const cardElement = container.querySelector('.card-type');
    expect(cardElement).toHaveClass(`card-type-${kindOf}`);
  })

  it('renders correctly with selected state', () => {
    const { container } = render(<CardType kindOf={kindOf} onClick={onClickMock} isSelected={true} />);
    const cardElement = container.querySelector('.card-type');
    const radioElement = cardElement?.querySelector('input[type=radio]');

    expect(radioElement).toBeChecked();
  })

  it('renders correctly with unselected state', () => {
    const { container } = render(<CardType kindOf={kindOf} onClick={onClickMock} isSelected={false} />);
    const cardElement = container.querySelector('.card-type');
    const radioElement = cardElement?.querySelector('input[type=radio]');

    expect(radioElement).not.toBeChecked();
  })

  it('calls once onClick function when card is clicked', () => {
    const { container } = render(<CardType kindOf={kindOf} onClick={onClickMock} isSelected={isSelected} />);
    const cardElement = container.querySelector('.card-type');

    if (cardElement) {
      fireEvent.click(cardElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    }
  })
});