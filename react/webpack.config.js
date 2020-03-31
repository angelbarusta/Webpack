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
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        // use: "css-loader"
        use: ["style-loader", "css-loader"]
        // use: [
        //   {
        //     loader: MiniCSSExtractPlugin.loader
        //   },
        //   "css-loader"
        // ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack-dev-server",
      template: path.resolve(__dirname, "index.html")
    })
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css"
    // })
  ]
};
