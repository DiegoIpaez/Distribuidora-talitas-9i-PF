import React from "react";
import { Link } from "react-router-dom";
import ProductId from "../components/ProductId";

const ProductScreen = () => {
  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col mt-2 atajos-id">
          <span className="pe-4">
            <Link to="/" className="atajos-text">
              Inicio
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4">
            <Link to="/ola" className="atajos-text">
              Aceite
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4">
            <Link to="/tuvieja" className="atajos-text">
              Cocinero
            </Link>
          </span>
        </div>
      </div>
      <ProductId />
    </div>
  );
};

export default ProductScreen;
