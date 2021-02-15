<script>
  import "normalize.css";
  import sounds from "./sounds";
  import EmojiButton from "./EmojiButton.svelte";
</script>

<style>
  main {
    background: #ecf0f1;
    min-height: 100vh;
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    main {
      background: #34495e;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
    margin: 0;
  }

  li {
    overflow-x: hidden;
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
  }
</style>

<main>
  <ul>
    {#each sounds as sound}
      <li>
        <EmojiButton {...sound} />
      </li>
    {/each}
  </ul>
</main>
