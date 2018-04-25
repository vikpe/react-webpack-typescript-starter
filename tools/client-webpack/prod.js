// production config
const {resolve} = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context=resolve(__dirname, '../../src/client');

module.exports = merge(common(context), {
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../../dist'),
    publicPath: '/',
  },
  mode:"production",
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
      filename: 'index.html',
    }),
  ],
});
