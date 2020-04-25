import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    max-width: 800px;
    margin: 4em auto;
  `;
  
  export const Content = styled.div`
  background: ${
    props => props.theme.title === 'dark' 
    ? lighten(0.1, props.theme.colors.background) 
    : shade(0.1, props.theme.colors.background)
  };
  
  margin: 4em auto;
  padding: 4em;
  border-radius: 15px;

  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: auto auto;
  grid-template-areas: "title" "paragraph";
`;

export const Title = styled.h1`
  grid-area: title;
  color: ${props => props.theme.title === 'dark' ? lighten(0.1, '#0077FF') : '#0077FF'};
`;

export const Text = styled.p`
  grid-area: paragraph;
  font-size: 1.1em;
  line-height: 1.5em;
  margin-top: 2em;
  text-align: justify;
`;