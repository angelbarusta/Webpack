import "../CSS/index.css";
import text from "./text.js";
import search from "./search.js";
import render from "./render.js";

console.log("HOLA PUTO HOME PLUGIN");

text();

if (module.hot) {
  module.hot.accept("./text.js", () => {
    // console.log("he recargado en caliente");
    text();
  });
}

const id = prompt("Quien es ese pokemon?");

search(id)
  .then((data) => {
    render(data);
  })
  .catch((err) => {
    const error = new Error(`ERROR: ${err}`);
    console.error(error);
  });
