<script>
  import '../app.css'
  import { pwaInfo } from 'virtual:pwa-info'

  if (pwaInfo) {
    import('virtual:pwa-register').then(({ registerSW }) =>
      registerSW({ immediate: true })
    )
  }

  const { children } = $props();
</script>

<svelte:head>
  {@html pwaInfo?.webManifest.linkTag}
</svelte:head>

{@render children()}
