import React from "react";

const TableCategorias = () => {
  return (
    <div className="container">
      {/* Titulo */}
      <div className="row ">
        <div className="col">
          <h1>Categorias</h1>
        </div>
      </div>
      {/* Fin Titulo */}
      {/* ------------------------------ */}
      {/* Titulo Tabla */}
      <div className="row appTabla mb-1">
        <div className="col-10 pt-3 pb-3">Nombre</div>
        <div className="col-2 mt-2 text-center">
          <button className="btn">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo Tabla */}
      {/* ------------------------------ */}
      {/* Cuerpo Tabla */}
      <div className="row">
        <div className="col-md-5 col-12 mt-2">Nombre</div>
        <div className="col-md-5 col-12 mt-2">id</div>
        <div className="col-md-1 col-2 mt-1">
          <button className="btn btn-primary">
            <i className="far fa-edit"></i>
          </button>
        </div>
        <div className="col-md-1 col-2 mt-1">
          <button className="btn btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <hr className="mt-1" />
      </div>
      {/* Cuerpo Tabla */}
    </div>
  );
};

export default TableCategorias;
