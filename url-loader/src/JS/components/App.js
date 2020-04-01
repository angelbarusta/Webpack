import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

console.log(data);

const App = () => {
  const [loaderList, setLoaderList] = useState([]);
  const handleClick = () => {
    setLoaderList(data.loaders);
  };
  const handleClickOcultar = () => {
    setLoaderList([]);
  };
  return (
    <div>
      MI APP REACT
      <p>
        <img src={logo} alt='logo' />
      </p>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={handleClick}>Mostrar lo aprendeido</button>
        <button onClick={handleClickOcultar}>Ocultar lo aprendeido</button>
      </div>
    </div>
  );
};
export default App;
