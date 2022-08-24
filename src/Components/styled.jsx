import styled from 'styled-components';

export const Title = styled.div`
  background-color: ${(props) => props.theme.palette.primary};
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  padding: 0.2em 1em;
  border-radius: 0.3em;
  margin: 1.5em 0;
  & h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: ${(props) => props.theme.fontWeight.bolder};
    text-transform: uppercase;
  }
`;

export const Badge = styled.div`
  background-color: ${(props) => props.theme.palette.primary};
  display: flex;
  justify-content: center;
  max-width: 20rem;
  width: max-content;
  color: ${(props) => props.theme.colors.white};
  padding: 0.3em 1em;
  border-radius: 0.3em;

  & h4 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    text-transform: uppercase;
  }
`;
