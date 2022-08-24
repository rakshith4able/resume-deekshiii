import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledCareer = styled.div`
  grid-area: career;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;


  & h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: ${(props) => props.theme.fontWeight.bolder};
    text-transform: uppercase;
  }

  & h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: ${(props) => props.theme.fontWeight.light};
    color:${props=>props.theme.colors.text}
  }
`;

export default function CareerObjective() {
  return (
    <StyledCareer>
      <Title>
        <h2>Career Objective</h2>
      </Title>
      <h3>{data.header.careerObjective}</h3>
    </StyledCareer>
  );
}
