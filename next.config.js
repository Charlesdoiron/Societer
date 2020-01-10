const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const optimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  target: "server",
  webpack: config => {
    config.node = {
      fs: "empty"
    };
    return config;
  }
};

module.exports = withPlugins(
  [
    withSourceMaps(),
    withBundleAnalyzer(),
    optimizedImages(),
    withCSS(),
    withFonts()
  ],
  nextConfig
);

// module.exports = {
//   env: {
//     SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
//     ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
//   }
// };
