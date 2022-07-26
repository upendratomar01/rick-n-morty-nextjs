import Card from '../../components/card/card';
import styled from 'styled-components';
import { ICharacter } from '../../interfaces';
import Spinner from '../../components/spinner/spinner';
import { GetServerSidePropsContext } from 'next';

export interface IdProps {
  data: ICharacter;
}

const StyledId = styled.div`
  color: pink;
`;

export function CharacterDetail({ data }: IdProps) {
  return (
    <StyledId>{data ? <Card char={data} row={true} /> : <Spinner />}</StyledId>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { id } = query;
  const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}

export default CharacterDetail;
