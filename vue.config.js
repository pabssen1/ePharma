const PreloadWebpackPlugin = require("preload-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  pwa: {
    name: "EasyPharma",
    themeColor: "#3628B4",
    msTileColor: "rgb(219, 45, 74) "
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin(),
      new PreloadWebpackPlugin({
        rel: "prefetch",
        include: {
          type: "asyncChunks",
          entries: ["app"]
        },
        as(entry) {
          if (/\.css$/.test(entry)) return "style";
          if (/\.woff$/.test(entry)) return "font";
          if (/\.png$/.test(entry)) return "image";
          return "script";
        }
      })
    ]
  }
};
