const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Import the CSS extraction plugin

module.exports = {
  // Set the mode to 'development' for easier debugging during development.
  // Change to 'production' for optimized, minified output suitable for deployment.
  mode: "development",

  // The main entry point for your React application.
  // Webpack starts building its dependency graph from this file.
  // Ensure that 'index.tsx' exists inside your './react/' directory.
  entry: "./react/index.tsx",

  // Configuration for where Webpack should output the bundled files.
  output: {
    // The absolute path to the output directory.
    // path.resolve(__dirname, 'bundle') creates a 'bundle' folder
    // at the root of your project (where this webpack.config.js resides).
    path: path.resolve(__dirname, "bundle"),
    // The name of the main JavaScript bundle file.
    filename: "js/bundle.js",
    // This option cleans the output directory ('./bundle/') before each new build.
    // This prevents old, unused files from accumulating.
    clean: true,
  },

  // Rules define how different types of modules (files) are processed by Webpack.
  module: {
    rules: [
      {
        // This rule applies to files with .js, .jsx, .ts, or .tsx extensions.
        test: /\.(js|jsx|ts|tsx)$/,
        // Exclude files from the 'node_modules' directory to speed up compilation,
        // as these are typically pre-compiled.
        exclude: /node_modules/,
        use: {
          // 'babel-loader' is used to transpile (convert) modern JavaScript,
          // JSX, and TypeScript code into a format compatible with older browsers.
          loader: "babel-loader",
          options: {
            // Babel presets define sets of transformations.
            presets: [
              "@babel/preset-env", // Transpiles modern JavaScript (ES6+) to ES5.
              "@babel/preset-react", // Transpiles JSX syntax into React.createElement calls.
              "@babel/preset-typescript", // Transpiles TypeScript into JavaScript.
            ],
          },
        },
      },
      {
        // This rule applies to CSS files.
        test: /\.css$/,
        // The 'use' array specifies the loaders to apply, in reverse order.
        use: [
          // 1. MiniCssExtractPlugin.loader: Extracts CSS into separate files.
          //    This is crucial for getting a physical 'styles.css' file in your bundle.
          MiniCssExtractPlugin.loader,
          // 2. 'css-loader': Interprets `@import` and `url()` like `import`/`require()`
          //    and resolves them. It turns CSS into CommonJS modules.
          "css-loader",
          // 3. 'postcss-loader': Processes CSS with PostCSS plugins.
          //    This is where Tailwind CSS and Autoprefixer are applied,
          //    using your 'postcss.config.js' configuration.
          "postcss-loader",
        ],
      },
    ],
  },

  // Configure how modules are resolved.
  resolve: {
    // This allows you to import modules without specifying their file extensions.
    // For example, you can write `import App from './App'` instead of `import App from './App.tsx'`.
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  // Plugins extend Webpack's capabilities beyond simple module transformations.
  plugins: [
    // HtmlWebpackPlugin: Simplifies the creation of HTML files to serve your webpack bundles.
    // It automatically injects your bundled JavaScript and CSS into the HTML.
    new HtmlWebpackPlugin({
      // The template HTML file to use. This file should be in your './react/' directory.
      template: "./react/index.html",
      // The name of the output HTML file that will be placed in the 'bundle' directory.
      filename: "index.html",
    }),
    // MiniCssExtractPlugin: Extracts CSS into separate files.
    // This plugin works in conjunction with its loader (defined in module.rules)
    // to create a dedicated CSS file (e.g., 'styles.css').
    new MiniCssExtractPlugin({
      // The filename for the extracted CSS file.
      filename: "css/styles.css", // You can customize this name if you wish
    }),
  ],

  // Configuration for the Webpack Development Server (optional, for local development).
  devServer: {
    // Specifies the directory from which to serve static files.
    // In this case, it serves files from your 'bundle' directory.
    static: {
      directory: path.join(__dirname, "bundle"),
    },
    // Enables GZIP compression for everything served by the development server.
    compress: true,
    // The port on which the development server will run.
    port: 3000,
    // Automatically opens your default web browser to the application when the server starts.
    open: true,
  },
};
