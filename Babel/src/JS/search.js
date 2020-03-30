// import "../CSS/index.css";
const API = "http://pokeapi.co/api/v2/pokemon/";

async function search(id) {
  const response = await fetch(`${API}${id}/`);
  const pokemon = await response.json();
  return pokemon;
}

export default search;
