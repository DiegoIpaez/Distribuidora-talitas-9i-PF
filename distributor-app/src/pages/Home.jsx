import React from "react";
import Carrusel from "../components/Carrusel";


import ProductosDestacados from "../components/ProductosDestacados";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
       <Carrusel />
      </div>
      <div className="container">
        <ProductosDestacados />
      </div>
    </div>
  );
};

export default Home;
