import { ICharacter } from '../../interfaces';
import styled from 'styled-components';
import { device } from '../../utils/devices';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';

export const StyledCardWrapper = styled.article<{ horizontal: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  justify-content: space-around;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  min-width: 200px;
  border-radius: 5px;
  cursor: pointer;
  @media ${device.mobileXL} {
    flex-direction: column;
    max-width: 300px;
  }
`;

export const StyledCardHeader = styled.header`
  position: relative;
`;

export const StyledCardHeading = styled.div`
  background-color: black;
  width: 100%;
  opacity: 0.5;
  padding-left: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: white;

  p {
    font-size: 12px;
  }
`;

export const StyledCardBody = styled.div<{ horizontal: boolean }>`
  padding: 0 13px;
  background-color: #333333;
  margin: 0;
  font-size: 12px !important;
  width: ${(props) => (props.horizontal ? '60%' : '100%')};
  border-radius: 10px;
  @media ${device.mobileXL} {
    width: 100%;
  }
`;

export const StyledCardItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 !important; */
  word-wrap: normal;
  border-bottom: 1px solid rgba(106, 106, 107, 0.5);

  p {
    &:first-child {
      color: lightgray;
    }
    &:last-child {
      color: orange;
    }
  }

  &:last-child {
    border: none;
  }
`;

export interface CardProps {
  char: ICharacter;
  row: boolean;
  goto?: () => void;
}

export function Card({ char, row, goto }: CardProps) {
  return (
    <StyledCardWrapper horizontal={row} onClick={goto} data-testid="card">
      <StyledCardHeader>
        <Image src={char.image} alt={char.name} height={300} width={300} />
        {!row && (
          <StyledCardHeading>
            <h4>{char.name}</h4>
            <p>
              ID: {char.id} - created {moment(char.created).fromNow()}
            </p>
          </StyledCardHeading>
        )}
      </StyledCardHeader>

      <StyledCardBody horizontal={row}>
        {row && <CardItem label="name" value={char.name} />}
        <CardItem label="status" value={char.status} />
        <CardItem label="species" value={char.species} />
        <CardItem label="gender" value={char.gender} />
        <CardItem label="origin" value={char.origin.name} />
        <CardItem label="last location" value={char.location.name} />
        {row && (
          <CardItem label="created" value={moment(char.created).fromNow()} />
        )}
      </StyledCardBody>
    </StyledCardWrapper>
  );
}

type Props = {
  label: string;
  value: string;
};
function CardItem({ label, value }: Props) {
  return (
    <StyledCardItem>
      <p>{label.toUpperCase()}</p>
      <p>{value}</p>
    </StyledCardItem>
  );
}

export default Card;
