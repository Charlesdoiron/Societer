const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");
module.exports = {
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
