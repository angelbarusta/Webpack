import React, { useState } from "react";
import Loader from "./loader";

import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../sass/index.scss";
import "../../less/index.less";
import "../../stylus/index.styl";

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
  const handleClick = async () => {
    setLoaderList(data);
    const { alerta } = import("./alert.js");
    alert("omg, este modulo a cargado dinamicamente!!");
  };
  const handleClickOcultar = () => {
    setLoaderList([]);
  };

  return (
    <div>
      MI APP REACT
      <p className='less'>esto es less</p>
      <p className='sass'>esto es sass</p>
      <p className='stylus'>esto es stylus</p>
      <p className='post-css'>esto es postcss</p>
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
