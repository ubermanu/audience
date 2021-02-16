import svelte from "rollup-plugin-svelte";
import svelteHot from "rollup-plugin-svelte-hot";
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./src/manifest.json";

// Note: SvelteHOT builds the wrong output in index.html
const ViteSvelte = process.env.NODE_ENV === "production" ? svelte : svelteHot;

/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [ViteSvelte(), VitePWA({ manifest })],
};
