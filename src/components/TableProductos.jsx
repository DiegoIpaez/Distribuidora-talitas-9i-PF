import React from "react";

const TableProductos = () => {
  return (
    <div className="container">
      {/* Titulo */}
      <div className="row">
        <div className="col">
          <h1>Productos</h1>
        </div>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla">
        <div className="col-md-3 col-12 pt-3 pb-3 ">Nombres</div>
        <div className="col-md-2 col-12 pt-3 pb-3">Disponible</div>
        <div className="col-md-2 col-12 pt-3 pb-3">Precio</div>
        <div className="col-md-3 col-12 pt-3 pb-3">Categorias</div>
      </div>
      {/* Fin de Titulo Tabla */}
      {/* ------------------------------ */}
      {/* Cuerpo Tabla */}
      <div className="row mt-2">
        <div className="col-md-3 col-12 mt-1">Nombre</div>
        <div className="col-md-2 col-12 mt-1">Disponible</div>
        <div className="col-md-2 col-12 mt-1">Precio</div>
        <div className="col-md-3 col-12 mt-1">Categorias</div>
        <div className="col-md-2 col-12">
          <button className="btn btn-primary me-3">
            <i class="far fa-edit"></i>
          </button>

          <button className="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>

        <hr className="mt-1" />
      </div>
      {/* Fin de Cuerpo Tabla */}
    </div>
  );
};

export default TableProductos;
