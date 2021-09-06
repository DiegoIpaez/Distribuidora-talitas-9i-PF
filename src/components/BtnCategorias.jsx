import React from "react";

const BtnCategorias = () => {
  return (
    <div className="btn btn-categ me-2">
        {/* Contenedor */}
        {/* ----------- */}
      <i className="fas fa-bars pe-1 iconos-nav"></i>
      <span>CATEGORIAS </span>
      <i className="fas fa-angle-down iconos-nav"></i>
      {/* Cuerpo del dropdown */}
      <div className="btn-categ-content container mt-2">
        <div className="row mb-3">
          <div className="col-7">
            <span>Aceites y vinagre</span>
          </div>
          <div className="col-3"></div>
          <div className="col-2">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            <span>Arroz</span>
          </div>
          <div className="col-8"></div>
          <div className="col-2">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            <span>Agua</span>
          </div>
          <div className="col-8"></div>
          <div className="col-2">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      {/* Fin Cuerpo Dropdown */}
    </div>
  );
};

export default BtnCategorias;
