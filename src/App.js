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

function App() {
  return (
    <Container>
      {audience.map((item, i) => (
        <div key={i}>
          <EmojiButton {...item} />
        </div>
      ))}
    </Container>
  );
}

export default App;
