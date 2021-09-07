import React from "react";
import { Link } from "react-router-dom";

const BtnCategorias = () => {
  return (
    <div className="btn btn-categ me-2">
      {/* Contenedor */}
      <i className="fas fa-bars pe-1 iconos-nav"></i>
      <span>CATEGORIAS </span>
      <i className="fas fa-angle-down iconos-nav"></i>
      {/*Fin de Contenedor */}
      {/* ------------------ */}
      {/* Cuerpo del dropdown */}
      <div className="btn-categ-content container mt-2">
        {/* Categoria */}
        <div className="row mb-3">
          <div className="btn col-7">
            <span><Link to='/product/44'>Aceites y vinagre</Link></span>
          </div>
          <div className="col-3"></div>
          <div className="btn col-2">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        {/* Fin de Categoria */}
        {/* -------------- */}
        {/* Producto */}
        <div className="container btn-categ-content2">
          <div className="row mb-3">
            <div className="btn col-2">
              <span><Link to='/product/44'>Aceite</Link></span>
            </div>
            <div className="col-8"></div>
            <div className="btn col-2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        {/* Fin de Producto */}
      </div>
      {/* Fin Cuerpo Dropdown */}
    </div>
  );
};

export default BtnCategorias;
