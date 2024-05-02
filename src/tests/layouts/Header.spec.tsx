import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Header } from '@/layouts';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header', () => {
  it('should navigate to home page when pokeball logo is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(getByAltText('Go Home!'));

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
