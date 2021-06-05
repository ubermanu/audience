import svelte from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import manifest from './src/manifest.json'

export default {
  plugins: [svelte(), VitePWA({ manifest })],
}
