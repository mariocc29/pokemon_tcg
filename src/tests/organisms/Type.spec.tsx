import { fireEvent, render } from "@testing-library/react";

import { Types } from "@/organisms/Types/Types";

jest.mock('@/hooks', () => ({
  useLocalStorage: () => ({
    getItem: jest.fn(() => ['fire', 'water']),
  }),
}));

describe('Types Component', () => {

  const onClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { queryByText } = render(<Types onClick={onClickMock} />);
    
    expect(queryByText('fire')).toBeInTheDocument();
    expect(queryByText('water')).toBeInTheDocument();
    expect(queryByText('grass')).toBeNull();
  });

  it('handles click events correctly', () => {
    const { getByText } = render(<Types onClick={onClickMock} />);

    fireEvent.click(getByText('fire'));
    expect(onClickMock).toHaveBeenCalledWith('fire');

    fireEvent.click(getByText('water'));
    expect(onClickMock).toHaveBeenCalledWith('water');

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
})
