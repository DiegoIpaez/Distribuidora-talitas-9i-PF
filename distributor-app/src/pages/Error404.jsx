import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h1>Error404...</h1>
      </div>
      <div className="row">
        <Link to="/">
          <div className="col">
            <button className="btn btn-danger mt-5">Volver a Inicio.</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
