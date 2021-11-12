const path = require("path");
const { resolve } = path;

const nextConfig = {
  reactStrictMode: true,
  // https://qiita.com/tatane616/items/e3ee99a181662ad6824b
  webpack: (config) => {
    config.resolve.alias["@components"] = resolve(__dirname, "components");
    config.resolve.alias["@styles"] = resolve(__dirname, "styles");
    return config;
  },
};

module.exports = nextConfig;
