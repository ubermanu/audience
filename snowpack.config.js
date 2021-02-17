/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte"],
  optimize: {
    bundle: true,
    minify: true,
  },
  buildOptions: {
    baseUrl: process.env.PUBLIC_URL || "/",
  },
};
