<script>
  import '../app.postcss'
  import { pwaInfo } from 'virtual:pwa-info'
  import { onMount } from 'svelte'

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: true })
    }
  })
</script>

<svelte:head>
  {@html pwaInfo?.webManifest.linkTag}
</svelte:head>

<slot />
