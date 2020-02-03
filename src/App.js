import React from "react";
import styled from "styled-components";
import EmojiButton from "./EmojiButton";
import sounds from "./sounds.json";

const Container = styled.div`
  background: #111;
  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <Container>
    {sounds.map((item, i) => (
      <span key={i}>
        <EmojiButton {...item} />
      </span>
    ))}
  </Container>
);

export default App;
