<script>
  export let emoji
  export let name
  export let src

  const audio = new Audio(src)

  function play() {
    audio.play()
  }

  function stop() {
    audio.pause()
    audio.currentTime = 0
  }

  function isPlaying() {
    return audio.duration > 0 && !audio.paused
  }

  function handleClick() {
    return isPlaying() ? stop() : play()
  }
</script>

<button class="button" on:click={handleClick}>
  <i class="emoji" role="img" aria-label={name}>{emoji}</i>
  <span class="name">{name}</span>
</button>

<style>
  .button {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 3rem;
    user-select: none;
    cursor: pointer;
  }

  .button:focus {
    outline: none;
  }

  .emoji {
    font-style: normal;
    font-size: 1em;
  }

  .name {
    display: inline-block;
    font-size: 0.33em;
    font-family: 'Arial', sans-serif;
    color: #000;
    margin-top: 1em;
  }

  @media (prefers-color-scheme: dark) {
    .name {
      color: #fff;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.8);
    }
  }
</style>
