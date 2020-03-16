import React from "react";
import styled from "styled-components";

const Button = styled.div`
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
  color: #000;
  margin-top: 1em;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    text-shadow: 0 0 10px #000;
  }
`;

const EmojiButton = ({ emoji, name, src, ...rest }) => {
  return (
    <Button {...rest}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
    </Button>
  );
};

export default EmojiButton;
