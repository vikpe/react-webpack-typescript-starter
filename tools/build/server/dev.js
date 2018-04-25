// development config

const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const nodeExternals = require('webpack-node-externals');

const root = process.cwd();
const context = resolve(root,"./src/server");
const dist = resolve(root, './dist');

module.exports = merge(common(context), {
  entry: [
    './index.ts' // the entry point of our app
  ],
  output: {
    publicPath: resolve(__dirname),
    filename: '[name].js',
    path: dist,
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [
      context, 'node_modules'
    ],
    extensions: ['.js', '.ts', '.json'],
  },
  mode: 'development',
  externals: [nodeExternals()],
  node: {
    global: true,
    __dirname: false,
    __filename: true,
    process: true,
    Buffer: true,
  },
});
