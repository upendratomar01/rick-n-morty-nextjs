import Card from '../../components/card/card';
import { ICharacter } from '../../interfaces';
import Spinner from '../../components/spinner/spinner';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

export interface IdProps {
  data: ICharacter;
}

export function CharacterDetail({ data }: IdProps) {
  return (
    <>
      <Head>
        <title>Character Details</title>
        <meta
          name="description"
          content="rick and morty characters, rick, morty, chars, search, sort, find chars"
        />
      </Head>
      {data ? <Card char={data} row={true} /> : <Spinner />}
    </>
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
