import React from 'react';
import styled from 'styled-components';

import { Title } from './styled';
import data from '../data';

const StyledCertification = styled.div`
  grid-area: certification;
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

const CertificationItem = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
  color: ${(props) => props.theme.colors.text};
  width: 20em;
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: 0.2em;
  padding: 0.5em;
  text-align: center;
  margin: 0.5em;
`;

export default function Certification() {
  return (
    <StyledCertification>
      <Title>
        <h2>Certification</h2>
      </Title>
      <div>
        {data.certifications.map((certification) => {
          return (
            <div key={certification}>
              <CertificationItem>{certification}</CertificationItem>
            </div>
          );
        })}
      </div>
    </StyledCertification>
  );
}
