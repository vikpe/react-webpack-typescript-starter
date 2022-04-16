module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isDevelopment = api.env("development");
  const plugins = [];

  if (isDevelopment) {
    plugins.concat("react-refresh/babel");
  }

  return {
    presets: [
      "@babel/env",
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/preset-typescript",
    ],
    plugins,
  };
};
