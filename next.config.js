//eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  // 参考: https://qiita.com/tatane616/items/e3ee99a181662ad6824b
  // webpack: (config) => {
  //   return config;
  // },
  // NOTE: globalにscssの変数やmixinを効かせるための記述
  // 参考: https://www.reddit.com/r/nextjs/comments/m1z72p/how_to_use_global_sass_variable/
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "global-variables.scss";`,
  },
  images: {
    domains: ["unsplash.com"],
  },
};

module.exports = nextConfig;
