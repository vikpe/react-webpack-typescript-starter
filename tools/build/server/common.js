// shared config (dev and prod)
module.exports = context =>({
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: context,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      }
    ],
  },
  plugins: [
  ]
})
