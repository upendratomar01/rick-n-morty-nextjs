import { ICharacter, IResult } from '../../interfaces';
import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { SearchInput } from '../../components/search-input/search-input';
import { SortInput } from '../../components/sort-input/sort-input';
import { CardList } from '../../components/card-list/card-list';
import Spinner from '../../components/spinner/spinner';

export interface CharactersProps {
  data: IResult;
}

const StyledHeader = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledBody = styled.div`
  margin: 1rem;
  min-height: 80vh;
  padding-bottom: 20px;
  background-color: #1e2229;
`;

const StyledCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Characters({ data }: CharactersProps) {
  const charactersData = data?.results;
  const [charsData, setCharsData] = useState<ICharacter[]>(charactersData);

  const search = (val: string) => {
    const re = new RegExp(val, 'gi');
    const newData = charactersData.filter((x) => x.name.match(re));
    setCharsData(newData);
  };

  const sort = (v: string) => {
    const arr = [...charactersData];
    arr.sort((a, b) => (v === 'asc' ? a.id - b.id : b.id - a.id));
    setCharsData(arr);
  };

  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      <StyledHeader>
        <SearchInput onSearch={search} />
        <SortInput onChange={sort} />
      </StyledHeader>
      <StyledBody>
        {charsData && charsData.length > 0 ? (
          <CardList data={charsData} />
        ) : (
          <StyledCenteredDiv>
            <h1>Not Found</h1>
          </StyledCenteredDiv>
        )}
      </StyledBody>
    </>
  );
}

export async function getServerSideProps(props) {
  const result = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await result.json();
  if (!data) return <Spinner />;
  return {
    props: {
      data,
    },
  };
}

export default Characters;
