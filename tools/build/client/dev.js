// development config

const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = resolve(__dirname, '../../../src/client');

module.exports = merge(common(context), {
  entry: [
    './index.tsx' // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
    proxy: {
      "!**/*.{js|css|hot-update.json}": {
        target: "http://localhost:3000",
      }
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
});
