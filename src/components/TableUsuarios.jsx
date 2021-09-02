import React from "react";

const TableUsuarios = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Usuarios</h1>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla">
        <div className="col-12 pt-3 pb-3">Nombres</div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      <div className="row mt-2">
        <div className="col-md-5 col-12 mt-1">Nombre</div>
        <div className="col-md-5 col-12 mt-1">id</div>
        <div className="col-md-1 col-12">
          <button className="btn btn-primary">
            <i class="far fa-edit"></i>
          </button>
        </div>
        <div className="col-md-1 col-12">
          <button className="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <hr className="mt-1" />
      </div>
      {/* Fin de cuerpo tabla */}
    </div>
  );
};

export default TableUsuarios;
