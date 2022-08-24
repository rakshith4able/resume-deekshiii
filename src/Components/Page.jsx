import React from 'react';
import styled from 'styled-components';

const MainPage = styled.div`
  width: 210mm;
  min-height: 297mm;
  padding: 0 1em;
  margin: 0 auto;
  background: ${(props) => props.color || 'white'};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-areas: ${(props) => props.gridLayout};
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 10% 10% 20% 1% 10% 10% 5%; */
  justify-items: center;
  /* align-items: center ; */
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html,
    body {
      width: 210mm;
      height: 297mm;
    }
    .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }
`;

export default function Page({ children, gridLayout }) {
  return (
    <>
      <MainPage gridLayout={gridLayout}>{children}</MainPage>
      <hr />
    </>
  );
}
