import { fireEvent, render } from "@testing-library/react";

import { InputRadio } from "@/atoms/InputRadio/InputRadio";

describe('InputRadio Component', () => {

  const onClickMock = jest.fn();
  const isSelected = false

  it('calls onClick function when input radio is clicked', () => {
    const { container } = render(<InputRadio onClick={onClickMock} isSelected={isSelected}/>);
    const radioElement = container.querySelector('input[type=radio]');

    if (radioElement) {
      fireEvent.click(radioElement);

      expect(radioElement).toBeChecked();
      expect(onClickMock).toHaveBeenCalledTimes(1);
    }
  });

  it('applies custom CSS classes to the button', () => {
    const customClass = 'custom-class';
    const { container } = render(<InputRadio onClick={onClickMock} isSelected={isSelected} inputClass={customClass} />);
    const checkmarkElement = container.querySelector('.checkmark');
    
    expect(checkmarkElement).toHaveClass(`checkmark-${customClass}`);
  });

  it('returns a input radio checked when isSelected is equal true', async () => {
    const { container } = render(<InputRadio onClick={onClickMock} isSelected={true} />);
    const radioElement = container.querySelector('input[type=radio]');

    if (radioElement) {
      expect(radioElement).toBeChecked();
    }
  });
})