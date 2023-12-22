<script>
  import sounds from '../sounds.js'
  import EmojiButton from './EmojiButton.svelte'
</script>

<main
  class="flex min-h-screen flex-col bg-amber-50 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900 dark:bg-amber-950 dark:from-amber-950 dark:to-amber-900 dark:text-amber-50"
>
  <ul
    class="box-border grid gap-8 p-8"
    style:grid-template-columns="repeat(auto-fill, minmax(3rem, 1fr))"
  >
    {#each sounds as sound}
      <li>
        <EmojiButton data={sound} />
      </li>
    {/each}
  </ul>
</main>
