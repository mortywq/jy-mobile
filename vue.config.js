const path = require("path");
const Random = Math.floor(Math.random() * 100);
const port = 8080;

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    output: {
      // 输出重构【模块名称.hash值.随机数】
      filename: `static/js/[name].[hash].${Random}.js`,
      chunkFilename: `static/js/[name].[hash].${Random}.js`
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
};
