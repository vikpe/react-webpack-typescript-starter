// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
  ]
});
