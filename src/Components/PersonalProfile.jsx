import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledPersonalProfile = styled.div`
  grid-area: personalProfile;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  color: ${(props) => props.theme.colors.text};

  table{
    border-spacing: .5em;
  }

  & td {
    /* width: 5em; */
    padding: .5em;
  }

  & td:nth-child(1) {
    background-color: ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.h4};

    border-radius: 0.2em;
  }

  & td:nth-child(2) {
    background-color: ${(props) => props.theme.palette.secondary};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.h4};

    border-radius: 0.2em;
  }
`;

export default function PersonalProfile() {
  return (
    <StyledPersonalProfile>
      <Title>
        <h2>Personal Profile</h2>
      </Title>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Father Name</td>
              <td>{data.personalProfile.fatherName}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>{data.personalProfile.dob}</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>{data.personalProfile.nationality}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledPersonalProfile>
  );
}
