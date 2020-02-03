import React from "react";
import styled from "styled-components";
import EmojiButton from "./EmojiButton";
import sounds from "./sounds.json";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #111;
  min-height: 100vh;
  width: 100vw;
`;

const OneFourthCell = styled.div`
  width: 25%;
  overflow-x: hidden;
`;

const App = () => (
  <FlexContainer>
    {sounds.map((item, i) => (
      <OneFourthCell key={i}>
        <EmojiButton {...item} />
      </OneFourthCell>
    ))}
  </FlexContainer>
);

export default App;
