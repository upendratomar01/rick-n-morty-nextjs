import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button onClick={jest.fn}>search</Button>);
    const baseElement = screen.getByTestId('btn');

    expect(baseElement).toBeInTheDocument();
  });
});
