module.exports = {
  globDirectory: "./build",
  globPatterns: ["**/*.{html,js,css,ogg,png}"],
  swDest: "build/sw.js",
  clientsClaim: "true",
  skipWaiting: "true",
  sourcemap: false,
};
