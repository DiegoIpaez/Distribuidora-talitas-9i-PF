import React, { useEffect, useState } from "react";
import { getProductos } from "../helpers/productos";

const BtnCategorias = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductos(respuesta.productos);
    });
  });

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
        {productos.map((producto) => {
          <div key={producto._id} className="row mb-3">
            <div className="btn col-7">
              <span>{producto.nombre}</span>
            </div>
            <div className="col-3"></div>
            <div className="btn col-2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>;
        })}

        {/* Fin de Categoria */}
        {/* Producto */}
        <div className="container btn-categ-content2">
          <div className="row mb-3">
            <div className="btn col-2">
              <span>Aceite</span>
            </div>
            <div className="col-8"></div>
            <div className="btn col-2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="row mb-3">
            <div className="btn col-2">
              <span>Vinagre</span>
            </div>
            <div className="col-8"></div>
            <div className="btn col-2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        {/* -------------- */}
      </div>

      {/* Fin Cuerpo Dropdown */}
    </div>
  );
};

export default BtnCategorias;
