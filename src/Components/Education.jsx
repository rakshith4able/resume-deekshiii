import React from 'react';
import styled from 'styled-components';
import data from '../data';

import { Title } from './styled';

const StyledEducation = styled.div`
  grid-area: education;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  & table {
    width: 80%;
  }

  & th,
  tr {
    padding: 0.5em;
    font-size: ${(props) => props.theme.fontSize.h4};
    font-weight: ${(props) => props.theme.fontWeight.light};
    border-radius: 0.2em;
    text-align: center;
    &:nth-child(1) {
      width: 15%;
    }
    &:nth-child(2) {
      width: 40%;
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 15%;
    }
    &:nth-child(5) {
      width: 15%;
    }
  }

  & th {
    background-color: ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.colors.white};

    /* width: 100px; */
  }

  & tr {
    background-color: ${(props) => props.theme.palette.secondary};
    height: 2em;
    color: ${(props) => props.theme.colors.text};
  }
`;

export default function Education() {
  return (
    <StyledEducation>
      <Title>
        <h2>Education</h2>
      </Title>
      <table>
        <tbody>
          <tr>
            <th>Course/ Major</th>
            <th>Institution</th>
            <th>Board/ Univesity</th>
            <th>Period of Study</th>
            <th>Score</th>
          </tr>
          {data.education.map((edu, idx) => {
            return (
              <tr key={edu.course}>
                <td>{edu.course}</td>
                <td>{edu.institution}</td>
                <td>{edu.board}</td>
                <td>{edu.period}</td>
                <td>{edu.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledEducation>
  );
}
