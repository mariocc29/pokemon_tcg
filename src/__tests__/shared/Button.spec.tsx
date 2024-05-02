// import { fireEvent, render } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Button } from '../../shared';


describe('Button Component', () => {
  it('renders button with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    
    expect(buttonElement).toBeInTheDocument();
  })
  
  // it('calls onClick when clicked', () => {
  //   const buttonText = 'Click me';
  //   const onClickMock = jest.fn();
  //   const { getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
  //   const button = getByText(buttonText);
  //   fireEvent.click(button);
    
  //   expect(onClickMock).toHaveBeenCalledTimes(1);
  // });
})