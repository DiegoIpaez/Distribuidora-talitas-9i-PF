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
    <>
      <form onSubmit={submitSearch}>
        <div className="form-group mb-2">
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
        <h3 className="text-white text-center mb-5">Cargando...</h3>
      ) : buscador.datos.length > 0 ? (
        <ul>
          {buscador.datos.map((productoB) => (
            <li className="busquedaL" key={productoB._id}>
              <Link className="nav-link" to={`/product/${productoB._id}`}>
                {productoB.nombre}
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <span>producto no encontrado</span>
      )}
    </>
  );
};

export default BarraBusqueda;
