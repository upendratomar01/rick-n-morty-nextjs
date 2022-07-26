import styled from 'styled-components';

type ButtonProps = {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
};

const StyledButton = styled.button`
  font-size: 1em;
  padding: 0.55em 1em;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
`;

export function Button({ onClick, children }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
