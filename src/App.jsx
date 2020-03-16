import React from "react";
import styled from "styled-components";
import EmojiButton from "./EmojiButton";
import sounds from "./sounds";

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

// Global sound object
const audio = new Audio();

// Returns TRUE if the player is running
const isPlaying = () =>
  audio.currentTime > 0 &&
  !audio.paused &&
  !audio.ended &&
  audio.readyState > 2;

// Play a sound
const play = sound => {
  if (!isPlaying()) {
    audio.src = sound.src;
    audio.play();
  }
};

// Stop playing the current sound
const stop = () => {
  if (isPlaying()) {
    audio.pause();
    audio.currentTime = 0;
  }
};

const App = () => (
  <Background onClick={stop}>
    <FlexContainer>
      {sounds.map((item, i) => (
        <OneFourthCell key={i}>
          <EmojiButton {...item} onClick={() => play(item)} />
        </OneFourthCell>
      ))}
    </FlexContainer>
  </Background>
);

export default App;
