import { render, screen } from '@testing-library/react';
import SortInput from './sort-input';

describe('SortInput', () => {
  it('should render successfully', () => {
    render(<SortInput onChange={jest.fn} />);
    const baseElement = screen.getByTestId('sortinput');
    expect(baseElement).toBeInTheDocument();
  });
});
