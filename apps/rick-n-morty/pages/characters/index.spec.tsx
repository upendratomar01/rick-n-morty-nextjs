import { render } from '@testing-library/react';
import { IResult } from '../../interfaces';

import Characters from './index';

describe('Characters', () => {
  it('should render successfully', () => {
    const obj: IResult = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character?page=2',
        prev: null,
      },
      results: [
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
      ],
    };
    const { baseElement } = render(<Characters data={obj} />);
    expect(baseElement).toBeTruthy();
  });
});
