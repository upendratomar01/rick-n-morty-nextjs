import Card from '../../components/card/card';
import styled from 'styled-components';
import { ICharacter } from '../../interfaces';
import Spinner from '../../components/spinner/spinner';
import { GetServerSidePropsContext } from 'next';

export interface IdProps {
  data: ICharacter;
}

export function CharacterDetail({ data }: IdProps) {
  return <div>{data ? <Card char={data} row={true} /> : <Spinner />}</div>;
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
