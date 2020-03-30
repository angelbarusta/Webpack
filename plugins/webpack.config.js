const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/JS/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "JS/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader"
        ]
        // use: "css-loader"
        // use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Plugins"
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
