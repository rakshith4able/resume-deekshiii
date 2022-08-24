import React from 'react';
import styled from 'styled-components';

import { Badge, Title } from './styled';
import data from '../data';

const StyledExperience = styled.div`
  grid-area: experience;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  
  & h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color:${props=>props.theme.colors.text}
  }

  & div:nth-child(2) {
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: ${(props) => props.theme.fontWeight.bolder};
    color:${props=>props.theme.colors.text}
  }

    & div:nth-child(1) {
      flex: 90%;
    }
    & div:nth-child(2) {
      flex: 10%;
    }
  }
`;

export default function Experience() {
  return (
    <StyledExperience>
      <Title>
        <h2>Experience</h2>
      </Title>
      <div>
        {data.experience.map((item) => {
          return (
            <React.Fragment key={item.role}>
              <div>
                <h2>{item.role}</h2>
                <h3>{item.organization}</h3>
              </div>
              <div>
                <Badge>
                  <h4>{item.period}</h4>
                </Badge>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </StyledExperience>
  );
}
