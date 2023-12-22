<script>
  /** @type {{ data: SoundData }} */
  const { data } = $props()

  /**
   * @typedef {Object} SoundData
   * @property {string} name
   * @property {string} emoji
   * @property {{ default: string }} src
   */
  const { name, emoji, src } = data

  const audio = new Audio(src.default)

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    appearance: none;
    cursor: pointer;
    margin: 0;
    border: none;
    background: none;
    padding: 0;
    width: 100%;
    font-size: 3rem;
    user-select: none;
    text-align: center;
  }

  .button:focus {
    outline: none;
  }

  .emoji {
    font-style: normal;
    font-size: 0.8em;
  }

  .name {
    display: inline-block;
    margin-top: 1em;
    color: #000;
    font-size: 0.33em;
    font-family: 'Arial', sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    .name {
      color: #fff;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.8);
    }
  }
</style>
