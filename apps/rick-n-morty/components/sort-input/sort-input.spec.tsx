import { render } from '@testing-library/react';

import SortInput from './sort-input';

describe('SortInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortInput onChange={jest.fn} />);
    expect(baseElement).toBeTruthy();
  });
});
