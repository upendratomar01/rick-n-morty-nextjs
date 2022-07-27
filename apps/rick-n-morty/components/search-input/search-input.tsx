import { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/button';

type SearchInputProps = {
  onSearch: (s: string) => void;
};

const StyledSearchInput = styled.input`
  padding: 10px;
  background: white;
  border: 1px solid gray;
  outline: none;
  border-radius: 3px;
`;

const StyledLabel = styled.label`
  padding: 7px 0;
  display: block;
`;

export function SearchInput({ onSearch }: SearchInputProps) {
  const [val, setVal] = useState('');

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onSearch(val);
    }
  };
  return (
    <div>
      <StyledLabel htmlFor="searchinput">Search by Name</StyledLabel>
      <StyledSearchInput
        data-testid="searchinput"
        id="searchinput"
        type="text"
        placeholder="search"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        onKeyUp={(e) => onEnter(e)}
      />
      <Button onClick={() => onSearch(val)}>Search</Button>
    </div>
  );
}

export default SearchInput;
