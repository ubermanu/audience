import React from 'react';
import styled from 'styled-components';
import EmojiButton from './EmojiButton';
import sounds from './sounds';

const Background = styled.div`
  background: #fafafa;
  min-height: 100vh;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background: #212121;
  }
`;

const FlexContainer = styled.div`
  max-width: 100%;
  padding: 1rem;
`;

const OneFourthCell = styled.div`
  width: 25%;
  overflow-x: hidden;
  display: inline-block;
  margin-bottom: 1rem;
  text-align: center;
`;

const App = () => (
  <Background>
    <FlexContainer>
      {sounds.map((item, i) => (
        <OneFourthCell key={i}>
          <EmojiButton {...item} />
        </OneFourthCell>
      ))}
    </FlexContainer>
  </Background>
);

export default App;
