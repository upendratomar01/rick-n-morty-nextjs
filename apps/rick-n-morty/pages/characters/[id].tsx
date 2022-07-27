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

export async function getStaticPaths() {
  const result = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await result.json();
  const paths = data.results.map((char) => ({
    params: { id: char.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const data = await result.json();
  if (!data) {
    return <Spinner />;
  }
  return {
    props: {
      data: data,
    },
  };
}

export default CharacterDetail;
