<script>
  import 'animate.css/animate.min.css'

  /** @type {{ data: SoundData }} */
  const { data } = $props()
  const { name, emoji, src, animation } = data

  const audio = new Audio(src.default)

  let playing = $state(false)

  audio.addEventListener('play', () => {
    playing = true
  })

  audio.addEventListener('pause', () => {
    playing = false
  })

  audio.addEventListener('ended', () => {
    playing = false
  })

  function play() {
    audio.play()
  }

  function stop() {
    audio.pause()
    audio.currentTime = 0
  }
</script>

<button
  class="flex w-full cursor-pointer flex-col items-center justify-center gap-2 p-4"
  onclick={() => (playing ? stop() : play())}
>
  <span
    class="text-5xl"
    role="img"
    aria-label={name}
    style:animation={playing && animation ? `${animation} 1s forwards` : 'none'}
  >
    {emoji}
  </span>
  <span class="text-2xl">{name}</span>
</button>
