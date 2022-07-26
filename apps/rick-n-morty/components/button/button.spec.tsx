import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button onClick={jest.fn}>search</Button>);
    const baseElement = screen.getByText(/search/i);
    expect(baseElement).toBeInTheDocument();
  });
});
