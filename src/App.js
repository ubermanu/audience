import React from "react";
import styled from "styled-components";
import EmojiButton from "./EmojiButton";
import audience from "./audience.json";

// console.log(audience);

const Container = styled.div`
  background: #111;
  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <Container>
    {audience.map((item, i) => (
      <span key={i}>
        <EmojiButton {...item} />
      </span>
    ))}
  </Container>
);

export default App;
