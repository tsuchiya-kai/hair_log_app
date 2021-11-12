// const path = require("path");
// const { resolve } = path;

const nextConfig = {
  reactStrictMode: true,
  // https://qiita.com/tatane616/items/e3ee99a181662ad6824b
  webpack: (config) => config,
};

module.exports = nextConfig;
