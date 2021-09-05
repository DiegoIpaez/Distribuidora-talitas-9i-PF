import React from "react";
import CarritoProducto from "../components/CarritoProducto";

const Carrito = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="container">
          <CarritoProducto />
        </div>
      </div>
    </div>
  );
};

export default Carrito;
