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
      <div className="row appTabla mb-1">
        <div className="col-5 pt-3 pb-3">Nombre</div>
        <div className="col-5 pt-3 pb-3">Email</div>
        <div className="col-2 mt-2 text-center">
          <button className="btn">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      <div className="row">
        <div className="col-md-5 col-12 mt-2">Nombre</div>
        <div className="col-md-5 col-12 mt-2">Email</div>
        <div className="col-md-2 col-2 mt-1 text-center">
          <button className="btn btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <hr className="mt-1" />
      </div>
      {/* Fin de cuerpo tabla */}
    </div>
  );
};

export default TableUsuarios;
