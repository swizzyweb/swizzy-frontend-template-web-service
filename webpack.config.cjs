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
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./react/index.html",
      filename: "index.html",
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
