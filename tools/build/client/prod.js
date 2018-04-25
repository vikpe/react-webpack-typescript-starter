// production config
const { resolve } = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root = process.cwd();
const context = resolve(root,"./src/client");

module.exports = merge(common(context), {
  entry: "./index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: resolve(root, "./dist/static/"),
    publicPath: "/static/"
  },
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html.ejs",
      filename: "./../index.html"
    })
  ]
});
