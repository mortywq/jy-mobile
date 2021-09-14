const path = require("path");
const Random = Math.floor(Math.random() * 100);
const port = 8080;

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    https: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
};
