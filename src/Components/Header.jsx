import React from 'react';
import styled from 'styled-components';

import data from '../data';

const StyledHeader = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  grid-area: header;
  display: grid;
  grid-template-areas:
    'basic contact'
    'career career';

  & h1 {
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.h1};
  }

  & h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: ${(props) => props.theme.fontWeight.lighter};
  }

  & > div:nth-child(1) {
    grid-area: basic;
    padding: 1em 0;
  }

  & > div:nth-child(2) {
    grid-area: contact;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1em 0;
    & a {
      text-decoration: none;
      font-size: ${(props) => props.theme.fontSize.h3};
      font-weight: ${(props) => props.theme.fontWeight.light};
      padding: 0.2em;
      color:${props=>props.theme.colors.text}
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>{data.header.name}</h1>
        <h2>{data.header.description}</h2>
      </div>
      <div>
        <a href={`mailto:${data.header.contact.email}`}>
          {data.header.contact.email}
        </a>
        <a href={`tel:${data.header.contact.mobile}`}>
          {data.header.contact.mobile}
        </a>
        <a href={`https://${data.header.contact.linkedIn}`}>
          {data.header.contact.linkedIn}
        </a>
      </div>
    </StyledHeader>
  );
}
