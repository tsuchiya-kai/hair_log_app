const path = require("path");
// const { resolve } = path;

const nextConfig = {
  reactStrictMode: true,
  // https://qiita.com/tatane616/items/e3ee99a181662ad6824b
  webpack: (config) => {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "ITCSS/settings/colors.scss";`,
  },
};

module.exports = nextConfig;
