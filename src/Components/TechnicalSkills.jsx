import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledTechnicalSkills = styled.div`
  grid-area: technicalSkills;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: 1fr 1fr 1fr; */
  }
`;

const Skill = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
  color: ${(props) => props.theme.colors.text};
  width: 11em;
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: 0.2em;
  padding: 0.5em;
  text-align: center;
  margin: 0.5em;
`;

export default function TechnicalSkills() {
  return (
    <StyledTechnicalSkills>
      <Title>
        <h2>Technical Skills</h2>
      </Title>
      <div>
        {data.skills.map((skill) => {
          return (
            <div key={skill.name}>
              <Skill>{skill.name}</Skill>
            </div>
          );
        })}
      </div>
    </StyledTechnicalSkills>
  );
}
