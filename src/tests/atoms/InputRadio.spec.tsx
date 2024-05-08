import { fireEvent, render } from "@testing-library/react";

import { InputRadio } from "@/atoms/InputRadio/InputRadio";

describe('InputRadio Component', () => {

  const isSelected = false

  it('returns a input radio checked when input radio is clicked', () => {
    const { container } = render(<InputRadio isSelected={isSelected}/>);
    const radioElement = container.querySelector('input[type=radio]');

    if (radioElement) {
      fireEvent.click(radioElement);
      expect(radioElement).toBeChecked();
    }
  });

  it('applies custom CSS classes to the button', () => {
    const customClass = 'custom-class';
    const { container } = render(<InputRadio isSelected={isSelected} inputClass={customClass} />);
    const checkmarkElement = container.querySelector('.checkmark');
    
    expect(checkmarkElement).toHaveClass(`checkmark-${customClass}`);
  });

  it('returns a input radio checked when isSelected is equal true', () => {
    const { container } = render(<InputRadio isSelected={true} />);
    const radioElement = container.querySelector('input[type=radio]');

    expect(radioElement).toBeChecked();
  });

  it('useEffect updates selected state when isSelected prop changes', () => {
    const { container, rerender } = render(<InputRadio isSelected={false} />);
    const radioElement = container.querySelector('input[type="radio"]');
    
    expect(radioElement).not.toBeChecked();
  
    rerender(<InputRadio isSelected={true} />);
    expect(radioElement).toBeChecked();
  });
})