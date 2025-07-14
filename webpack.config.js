const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js", // путь к js (пусть даже пустой)
  output: {
    filename: "js/main.js", // имя итогового js
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // твой html-шаблон
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/js/mail.js", to: "js/mail.js" },
        { from: "src/images", to: "images" },
        { from: "src/css", to: "css" },
      ],
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
  },
};
