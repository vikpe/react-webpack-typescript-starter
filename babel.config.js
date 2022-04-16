module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      "@babel/env",
      ['@babel/preset-react', {development: !api.env('production'), runtime: 'automatic'}],
      "@babel/preset-typescript",
    ]
  };
};
