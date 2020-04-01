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
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: [/\.jpg|png|gif|woff|eot|ttf|svg|mp4|mp3|webm$/],
        use: {
          loader: "url-loader",
          options: {
            limit: 90000
          }
        }
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
