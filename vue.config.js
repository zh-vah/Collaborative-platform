const path = require("path");

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    port: 3002,
    proxy: {
      "^/api": {
        target: "http://172.18.1.4:8091/",
        changeOrigin: true
      }
    },
    before: app => { }
  },
  lintOnSave: false,
  configureWebpack: {
    name: "webapp",
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
