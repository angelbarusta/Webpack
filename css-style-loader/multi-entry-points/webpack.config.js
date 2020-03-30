const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/JS/index.js"),
    precios: path.resolve(__dirname, "src/JS/precios.js"),
    contacto: path.resolve(__dirname, "src/JS/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "JS/[name].js"
  }
};
