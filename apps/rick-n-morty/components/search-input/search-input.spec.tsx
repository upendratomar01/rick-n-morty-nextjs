import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchInput from './search-input';

describe('SearchInput', () => {
  it('should render successfully', () => {
    render(<SearchInput onSearch={jest.fn} />);
    const input = screen.getByTestId('searchinput');
    expect(input).toBeInTheDocument();
  });

  it('should change input value', () => {
    render(<SearchInput onSearch={jest.fn} />);
    const input = screen.getByTestId('searchinput');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input).toHaveValue('hello');
  });
});
