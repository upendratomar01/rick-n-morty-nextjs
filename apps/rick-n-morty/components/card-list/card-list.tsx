import { ICharacter } from '../../interfaces';
import styled from 'styled-components';
import Card from '../card/card';
import { useRouter } from 'next/router';

export interface CardListProps {
  data: ICharacter[];
}

const StyledCardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
`;

export function CardList({ data }: CardListProps) {
  const router = useRouter();

  const handleGoTo = (id: string) => {
    router.push(`/characters/${id}`);
  };
  return (
    <StyledCardList>
      {data.map((d) => (
        <Card
          key={d.id}
          char={d}
          row={false}
          goto={() => handleGoTo(d.id.toString())}
        />
      ))}
    </StyledCardList>
  );
}

export default CardList;
