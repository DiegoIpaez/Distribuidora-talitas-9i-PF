import React, { useState } from "react";
import { getBuscar } from "../helpers/buscador";

const BarraBusqueda = () => {
  const coleccion = ["categorias"];

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
          datos: respuesta.results,
          loading: false,
        });
      });
      setInputValue("");
    }
  };
  

  console.log(buscador);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={submitSearch}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={inputValue}
                onChange={changeInput}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-md-8 offset-md-2">
        {buscador.loading ? (
            <h3 className="text-white text-center mb-5">Cargando...</h3>
          ): <span>busqueda:{buscador.datos.categorias.nombre}</span>
          }
         
          
        </div>
      </div>
    </div>
  );
};

export default BarraBusqueda;
