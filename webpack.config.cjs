const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./react/index.tsx",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "js/bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        // webpack 5's built-in asset modules — no extra loader dependency
        // needed. Covers both a JS/TS `import logo from "./logo.png"` and a
        // CSS `url(...)` background-image reference.
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./react/index.html",
      filename: "index.html",
      // Copies the file into the output dir and injects the <link
      // rel="icon"> tag automatically — no separate copy step/manual tag
      // needed. Without this, every generated site 404s on /favicon.ico.
      favicon: "./react/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "bundle"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
