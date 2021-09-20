import React, { useEffect, useState } from "react";
import { getProductos } from "../helpers/productos";
import { getCategorias } from "../helpers/categorias";

const BtnCategorias = () => {
  const [categorias, setCategorias] = useState({
    datos: [],
    loading: true,
  });
  const [productos, setProductos] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getProductos().then((resp) => {
      setProductos({
        data: resp.productos,
        loading: false,
      });
      console.log(resp.productos);
    });
  }, []);

  useEffect(() => {
    getCategorias().then((respuesta) => {
      setCategorias({
        datos: respuesta.categorias,
        loading: false,
      });
      console.log(respuesta.categorias);
    });
  }, []);

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

        {categorias.datos.map((categ) => (
          <div className="row mb-3" key={categ._id}>
            <div className="btn col-7">
              <span>{categ.nombre}</span>
            </div>
            <div className="col-3"></div>
            <div className="btn col-2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        ))}
        {/* Producto */}
        <div className="container btn-categ-content2">
          {productos.data.map((productos) => (
            <div className="row mb-3" key={productos._id}>
              <div className="btn col-2">
                <span>{productos.nombre}</span>
              </div>
              <div className="col-8"></div>
              <div className="btn col-2">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Fin de Categoria */}
        {/* -------------- */}
      </div>

      {/* Fin Cuerpo Dropdown */}
    </div>
  );
};

export default BtnCategorias;
