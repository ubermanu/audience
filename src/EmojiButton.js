import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  font-size: 10vw;
`;

const Emoji = styled.div`
  font-size: 1em;
`;

const Name = styled.div`
  font-size: 0.33em;
  font-family: "Arial", sans-serif;
  color: white;
  margin-top: 1em;
  text-shadow: 0 0 10px black;
`;

const EmojiButton = ({ emoji, name, src }) => {
  const audio = new Audio(src);
  return (
    <Button onClick={() => audio.play()}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
    </Button>
  );
};

export default EmojiButton;
