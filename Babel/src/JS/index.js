import "../CSS/index.css";
import text from "./text.js";

console.log("HOLA PUTO HOME PLUGIN");

text();

if (module.hot) {
  module.hot.accept("./text.js", () => {
    console.log("he recargado en caliente");
    text();
  });
}
