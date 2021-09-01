import React from "react";

const TableCategorias = () => {
  return (
    <div className="col-md-6 col-12 mt-5 mb-4">
      <div className="container">
        <div className="row">
          <h1>Categorias</h1>
        </div>
        <div className="row text-center">
          <div className="col-md-8 col-12">Nombre</div>
          <div className="col-md-1 col-12">editar</div>
          <div className="col-md-1 col-12">borrar</div>
        </div>
        <div className="row text-center">
          <div className="col-md-8 col-12">Nombre</div>
          <div className="col-md-1 col-12">
            <button className="btn btn-warning">x</button>
          </div>
          <div className="col-md-1 col-12">
            <button className="btn btn-warning">x</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCategorias;
