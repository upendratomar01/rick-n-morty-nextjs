import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './spinner';

describe('Spinner', () => {
  it('should render successfully', () => {
    render(<Spinner />);
    const baseElement = screen.getByTestId('spinner');
    expect(baseElement).toBeInTheDocument();
  });
});
