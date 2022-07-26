import { render, screen } from '@testing-library/react';
import { ICharacter } from '../../interfaces';
import '@testing-library/jest-dom';
import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const obj: ICharacter = {
      id: 1,
      name: 'test',
      status: 'online',
      gender: 'male',
      species: 'dummy',
      location: { name: 'abc', url: 'http://abc.com' },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      created: '2 year ago',
      origin: { name: 'origin', url: 'test url' },
    };
    render(<Card char={obj} row={true} />);

    const baseElement = screen.getByText(/online/i);
    expect(baseElement).toBeInTheDocument();
  });
});
