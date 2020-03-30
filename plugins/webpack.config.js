const path = require("path");

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
        // use: "css-loader"
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: []
};
