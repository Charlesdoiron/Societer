const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const optimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");
const withManifest = require("next-manifest");

(module.exports = {
  env: {
    SPACE_ID: "86i03dw6wwwc",
    CONTENTFUL_TOKEN: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0",
    CONTENTFUL_ENV: "master"
  }
}),
  withPlugins([
    withSourceMaps(),
    withBundleAnalyzer(),
    optimizedImages(),
    withCSS(),
    withFonts(),
    withOffline()
  ]);
