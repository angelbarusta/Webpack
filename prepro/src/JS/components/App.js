import React, { useState } from "react";
import Loader from "./loader";

import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

const data = {
  loaders: [
    {
      name: "css-loader",
      id: "1"
    },
    {
      name: "style-loader",
      id: "2"
    },
    {
      name: "babel-loader",
      id: "3"
    }
  ]
};

const App = () => {
  const [loaderList, setLoaderList] = useState([]);
  const handleClick = () => {
    setLoaderList(data);
  };
  const handleClickOcultar = () => {
    setLoaderList([]);
  };
  return (
    <div>
      MI APP REACT
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt='logo' width={40} />
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
