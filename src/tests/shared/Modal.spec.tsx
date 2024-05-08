import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@/shared';
import { store } from '@/state';

jest.mock('react-router-dom');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Modal', () => {
  
  beforeEach(() => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  })

  it('should render modal correctly with success status', () => {
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue({
      show: false,
      status: 'success',
      message: 'success message'
    });
  
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    expect(container.querySelector('.modal-success')).toBeInTheDocument();
    expect(container.textContent).toContain('success message');
  });

  it('should render modal correctly with alert status', () => {
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue({
      show: false,
      status: 'alert',
      message: 'alert message'
    });
  
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    expect(container.querySelector('.modal-alert')).toBeInTheDocument();
    expect(container.textContent).toContain('alert message');
  });

  it('should dispatch toggleModal action and navigate to home page when button is clicked', () => {
    const dispatchMock = jest.fn();
    (require('react-redux').useDispatch as jest.Mock).mockReturnValue(dispatchMock);

    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue({
      show: false,
      status: 'success',
      message: 'success message'
    });
  
    const { getByText } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    fireEvent.click(getByText('Catch it!'));

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'modal/toggle', payload: { show: false, status: null, message: null } });
    expect(useNavigate()).toHaveBeenCalledWith('/deck'); 
  });
});