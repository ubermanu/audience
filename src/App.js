import React from "react";

import audience from "./audience.json";
import styled from "styled-components";

console.log(audience);

const Container = styled.div`
  background: #111;
  height: 100vh;
  width: 100vw;
`;

const EmojiButton = ({ emoji, src }) => {
  const audio = new Audio(`media/${src}`);
  return <button onClick={() => audio.play()}>{emoji}</button>;
};

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
