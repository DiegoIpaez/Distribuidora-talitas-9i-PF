import React, { useEffect, useState } from "react";
import { getCategorias } from "../helpers/categorias";
import { getCategoriasP } from "../helpers/categoriasP";
import { getProductos } from "../helpers/productos";


const BtnCategorias = () => {
  const [categoriasP, setCategoriasP] = useState({
    datos: [],
    loading: true,
  });

  const [categorias, setCategorias] = useState({
    datos: [],
    loading: true,
  });

  const [productos, setProductos] = useState({
    datos: [],
    loading: true,
  });

  useEffect(() => {
    getCategoriasP().then((resp) => {
      setCategoriasP({
        datos: resp.categoriasP,
        loading: false,
      });
    });
  }, []);


  useEffect(() => {
    getCategorias().then((respuesta) => {
      setCategorias({
        datos: respuesta.categorias,
        loading: false,
      });
    });
  }, []);

  useEffect(() => {
    getProductos().then((devolver) => {
      setProductos({
        datos: devolver.productos,
        loading: false,
      });
    });
  }, []);

  console.log(categoriasP);
  console.log(categorias);
  console.log(productos);

  return (
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main_nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="main_nav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown" id="myDropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              CATEGORIAS
            </span>
            <ul className="dropdown-menu">
              {/* Aqui va el primer mapeo de la categoria Padre */}
              {categoriasP.datos.map((categoriasP) => (
                <li key={categoriasP._id}>
                  <span className="dropdown-item">
                    {categoriasP.nombre} &raquo;
                  </span>
                  {categorias.datos.map((categorias) => (
                    <ul key={categorias._id} className="submenu dropdown-menu">
                      <li>
                        <span className="dropdown-item">
                          {categorias.nombre} &raquo;
                        </span>
                        <ul className="submenu dropdown-menu">
                          {productos.datos.map((productos) => (
                            <li key={productos._id}>
                              <span className="dropdown-item">
                                {productos.nombre}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ))}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BtnCategorias;
