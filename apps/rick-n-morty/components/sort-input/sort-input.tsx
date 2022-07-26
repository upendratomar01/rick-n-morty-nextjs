import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SortInputProps {
  onChange: (s: string) => void;
}

const StyledSortInput = styled.select`
  font-size: 1em;
  padding: 0.55em 1em;
  border: 1px solid gray;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: black;
  }

  option {
    color: gray;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const StyledLabel = styled.label`
  padding: 7px 0;
  display: block;
`;

export function SortInput({ onChange }: SortInputProps) {
  return (
    <div>
      <StyledLabel>Sort by ID</StyledLabel>
      <StyledSortInput
        defaultValue="asc"
        onChange={(e) => onChange(e.target.value)}
      >
        {/* <option disabled>Sort by ID</option> */}
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </StyledSortInput>
    </div>
  );
}

export default SortInput;
