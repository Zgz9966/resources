const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ?
  "/resources/" :
  "/";

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("api", resolve("src/api"));
    config.module.rule("md")
      .test(/\.md/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader");
  },
  productionSourceMap: false,
};
