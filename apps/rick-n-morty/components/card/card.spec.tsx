import { render } from '@testing-library/react';
import { ICharacter } from '../../interfaces';

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
    const { baseElement } = render(<Card char={obj} row={true} />);
    expect(baseElement).toBeTruthy();
  });
});
