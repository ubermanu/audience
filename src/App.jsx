import React from 'react';
import styled from 'styled-components';
import EmojiButton from './EmojiButton';
import sounds from './sounds';

const Background = styled.div`
  background: #ecf0f1;
  min-height: 100vh;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background: #34495e;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
`;

const Item = styled.div`
  overflow-x: hidden;
  display: inline-block;
  margin-bottom: 1rem;
  text-align: center;
`;

const App = () => (
  <Background>
    <GridContainer>
      {sounds.map((item, i) => (
        <Item key={i}>
          <EmojiButton {...item} />
        </Item>
      ))}
    </GridContainer>
  </Background>
);

export default App;
