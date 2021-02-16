import svelte from "rollup-plugin-svelte-hot";

/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [svelte()],
  rollupDedupe: ["svelte"],
};
