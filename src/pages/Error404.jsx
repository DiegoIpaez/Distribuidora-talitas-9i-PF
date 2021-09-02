import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h1 className="title-error mt-2">404</h1>
        <h4 className="mb-5">Not Found</h4>
      </div>
      <div className="row">
        <h6>
          Por favor verifique la direccion introducida e intentelo de nuevo o
        </h6>
        <Link to="/">
          <button className="btn btn-error404 mt-1">Volver a Inicio.</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
