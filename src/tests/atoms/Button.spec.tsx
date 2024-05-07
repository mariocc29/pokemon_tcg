import { fireEvent, render } from '@testing-library/react';

import { Button } from "@/atoms/Button/Button";

describe('Button Component', () => {

  const onClickMock = jest.fn();
  const buttonText = 'Click me';

  it('renders button with correct text', () => {
    const { getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick function when button is clicked', () => {
    const { getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom CSS classes to the button', () => {
    const customClass = 'custom-class';
    const { container } = render(<Button onClick={onClickMock} btnClass={customClass}>{buttonText}</Button>);
    const buttonElement = container.querySelector('button');
    
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass(customClass);
  });

  it('shows and hides elements based on pressed state when animateOnClick is set to true', () => {
    const { container, getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
    const buttonElement = container.querySelector('button');
    const spanElement = getByText(buttonText)
    
    if (buttonElement) {
      fireEvent.click(buttonElement);
      expect(spanElement).not.toBeInTheDocument();
      expect(container.querySelector('circle')).toHaveClass('fill-in');
    }
  });

  it('handle elements based on pressed state when animateOnClick is set to false', () => {
    const { container, getByText } = render(<Button onClick={onClickMock} animateOnClick={false}>{buttonText}</Button>);
    const buttonElement = container.querySelector('button');
    const spanElement = getByText(buttonText)
    const svgElement = container.querySelector('svg')
    
    if (buttonElement) {
      fireEvent.click(buttonElement);
      expect(spanElement).toBeInTheDocument();
      expect(svgElement).not.toBeInTheDocument();
    }
  });
})
