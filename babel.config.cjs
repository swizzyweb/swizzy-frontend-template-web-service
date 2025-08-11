module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // 'automatic' for new JSX transform
    "@babel/preset-typescript",
  ],
};
