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

<button
  class="flex w-full cursor-pointer flex-col items-center justify-center gap-2 p-4"
  onclick={handleClick}
>
  <span class="text-5xl" role="img" aria-label={name}>{emoji}</span>
  <span class="text-2xl">{name}</span>
</button>
