import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

const Button = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 10vw;
  user-select: none;
`;

const Emoji = styled.div`
  font-size: 1em;
`;

const Name = styled.div`
  font-size: 0.33em;
  font-family: 'Arial', sans-serif;
  color: #000;
  margin-top: 1em;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.8);
  }
`;

const EmojiButton = ({ emoji, name, src }) => {
  const [play, { stop, isPlaying }] = useSound(src);
  return (
    <Button onClick={() => isPlaying ? stop() : play()} role="button">
      <Emoji>
        <span role="img" aria-label={name}>
          {emoji}
        </span>
      </Emoji>
      <Name>{name}</Name>
    </Button>
  );
};

export default EmojiButton;
