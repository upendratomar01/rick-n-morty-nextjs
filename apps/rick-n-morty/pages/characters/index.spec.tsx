import { render, screen } from '@testing-library/react';
import { IResult } from '../../interfaces';
import '@testing-library/jest-dom';
import Characters from './index';

describe('Characters', () => {
  it('should render successfully', async () => {
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
    render(<Characters data={obj} />);

    const inputEL = screen.getByTestId('searchinput');
    const sortEL = screen.getByTestId('sortinput');

    const cardEL = await screen.findAllByText(/online/i);

    expect(inputEL).toBeInTheDocument();
    expect(sortEL).toBeInTheDocument();
    expect(cardEL).toHaveLength(2);
  });
});
