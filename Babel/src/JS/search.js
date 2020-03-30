// import "../CSS/index.css";
const API = "http://pokeapi.co/api/v2/pokemon/";

async function search(id) {
  const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
}

export default search;
