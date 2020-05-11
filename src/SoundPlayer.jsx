// Global sound object
const audio = new Audio();

// Returns TRUE if the audio is playing something
const isPlaying = () =>
  audio.currentTime > 0 &&
  !audio.paused &&
  !audio.ended &&
  audio.readyState > 2;

// Play a sound
export const play = (sound) => {
  if (!isPlaying()) {
    audio.src = sound.src;
    audio.play();
  }
};

// Stop playing the current sound
export const stop = () => {
  if (isPlaying()) {
    audio.pause();
    audio.currentTime = 0;
  }
};
