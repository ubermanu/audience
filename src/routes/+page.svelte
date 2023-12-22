<script>
  import sounds from '../sounds.js'
  import EmojiButton from '$lib/EmojiButton.svelte'
</script>

<main>
  <ul>
    {#each sounds as sound}
      <li>
        <EmojiButton data={sound} />
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    background: #ecf0f1;
    width: 100%;
    min-height: 100vh;
  }

  @media (prefers-color-scheme: dark) {
    main {
      background: #34495e;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    list-style: none;
    grid-gap: 2rem;
    margin: 0;
    padding: 2rem;
  }

  li {
    margin-bottom: 0;
    overflow-x: hidden;
  }
</style>
