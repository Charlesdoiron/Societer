const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const optimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  withSourceMaps(),
  withBundleAnalyzer(),
  optimizedImages(),
  withCSS(),
  withFonts()
]);
