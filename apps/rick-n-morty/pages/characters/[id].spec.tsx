import { render } from '@testing-library/react';
import { ICharacter } from '../../interfaces';

import { CharacterDetail } from './[id]';

describe('Character detail', () => {
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
    const { baseElement } = render(<CharacterDetail data={obj} />);
    expect(baseElement).toBeTruthy();
  });
});
