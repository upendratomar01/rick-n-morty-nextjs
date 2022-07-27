import { render, screen } from '@testing-library/react';
import { ICharacter } from '../../interfaces';
import CardList from './card-list';

describe('CardList', () => {
  it('should render successfully', () => {
    const arr: ICharacter[] = [
      {
        id: 1,
        name: 'test',
        status: 'online',
        gender: 'male',
        species: 'dummy',
        location: { name: 'abc', url: 'http://abc.com' },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        created: '2 year ago',
        origin: { name: 'origin', url: 'test url' },
      },
      {
        id: 2,
        name: 'test 2',
        status: 'online 2',
        gender: 'female',
        species: 'dummy 2',
        location: { name: 'abc', url: 'http://abc.com' },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        created: '2 year ago',
        origin: { name: 'origin', url: 'test url' },
      },
    ];
    render(<CardList data={arr} />);
    const baseElement = screen.getByText(/female/i);
    expect(baseElement).toBeInTheDocument();
  });
});
