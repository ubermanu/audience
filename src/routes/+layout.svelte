<script>
  import '../app.postcss'
  import { pwaInfo } from 'virtual:pwa-info'

  if (pwaInfo) {
    import('virtual:pwa-register').then(({ registerSW }) =>
      registerSW({ immediate: true })
    )
  }
</script>

<svelte:head>
  {@html pwaInfo?.webManifest.linkTag}
</svelte:head>

<slot />
