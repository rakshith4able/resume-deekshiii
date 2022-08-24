import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledCareer = styled.div`
  grid-area: projects;
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
    color: ${(props) => props.theme.colors.text};
  }
`;

export default function Projects() {
  return (
    <StyledCareer>
      <Title>
        <h2>Project</h2>
      </Title>
      {data.projects.map((project) => {
        return <h3 key={project}>{project}</h3>;
      })}
    </StyledCareer>
  );
}
