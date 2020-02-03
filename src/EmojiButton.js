import React from "react";

const EmojiButton = ({ emoji, src }) => {
  const audio = new Audio(`media/${src}`);
  return <button onClick={() => audio.play()}>{emoji}</button>;
};

export default EmojiButton;
