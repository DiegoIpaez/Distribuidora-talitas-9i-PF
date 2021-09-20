import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getBuscar } from "../helpers/buscador";

const BarraBusqueda = () => {
  const coleccion = ["productos"];

  const [buscador, setBuscador] = useState({
    datos: [],
    loading: false,
  });

  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setBuscador({
        ...buscador,
        loading: true,
      });

      getBuscar(coleccion, inputValue).then((respuesta) => {
        setBuscador({
          datos: respuesta.results.productos,
          loading: false,
        });
        console.log(buscador.datos);
      });
      setInputValue("");
    }
  };

  return (
    <div className="busquedaC">
      <form onSubmit={submitSearch}>
        <div className="form-group mb-1">
          <input
            type="text"
            className="form-control"
            placeholder="buscar..."
            value={inputValue}
            onChange={changeInput}
          />
        </div>
      </form>

      {buscador.loading ? (
        <ul className="busquedaL">
          <li className="pt-2 pb-2 pe-5">
            <span className="pe-5">Cargando...</span>
          </li>
        </ul>
      ) : buscador.datos.length > 0 ? (
        <ul className="busquedaL">
          {buscador.datos.map((productoB) => (
            <li className="pe-5" key={productoB._id}>
              <Link className="nav-link" to={`/product/${productoB._id}`}>
                <h8>{productoB.nombre}</h8>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="busquedaL">
          <li className="pt-2 pb-2 pe-4">
            {" "}
            <span>Producto no encontrado...</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BarraBusqueda;
