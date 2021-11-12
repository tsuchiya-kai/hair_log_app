const path = require("path");
const { resolve } = path;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias["@components"] = resolve(__dirname, "components");
    config.resolve.alias["@styles"] = resolve(__dirname, "styles");
    return config;
  },
};

module.exports = nextConfig;
