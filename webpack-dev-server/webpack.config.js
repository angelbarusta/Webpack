const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/JS/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "JS/[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 1111
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Plugins"
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
