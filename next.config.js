const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");
module.exports = {
  publicRuntimeConfig: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENV: process.env.CONTENTFUL_ENV,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  },
  env: {
    SPACE_ID: "86i03dw6wwwc",
    CONTENTFUL_TOKEN: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0",
    CONTENTFUL_ENV: "master",
  },
};
withPlugins([
  optimizedImages(),
  withSourceMaps({
    webpack(config, _options) {
      return config;
    },
  }),
]);
