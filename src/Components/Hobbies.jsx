import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledHobbies = styled.div`
  grid-area: hobbies;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  & div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-template-columns: 1fr 1fr 1fr; */
  }
`;

const Hobby = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
  color: ${(props) => props.theme.colors.text};
  width: 10em;
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: 0.2em;
  padding: 0.5em;
  text-align: center;
  margin: 0.5em;
`;

export default function Hobbies() {
  return (
    <StyledHobbies>
      <Title>
        <h2>Hobbies</h2>
      </Title>
      <div>
        {data.hobbies.map((hobby) => {
          return (
            <div key={hobby}>
              <Hobby>{hobby}</Hobby>
            </div>
          );
        })}
      </div>
    </StyledHobbies>
  );
}
