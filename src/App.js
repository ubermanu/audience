import React from "react";

import audience from "./audience.json";
import styled from "styled-components";

console.log(audience);

const Container = styled.div`
  background: #111;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return <Container></Container>;
}

export default App;
