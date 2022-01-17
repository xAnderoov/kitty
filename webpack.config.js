const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.html$/,
        use: ["extract-loader", "html-loader"],
      },
    ],
  },
};

// find complete solution
// copy html file with pasing paths
