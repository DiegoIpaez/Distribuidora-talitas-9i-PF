import React, { useEffect, useState } from "react";
import { getCategoriasP, deleteCategoriaP } from "../helpers/categoriasP";
import BtnPaginacion from "./BtnPaginacion";
import ModalPadreCateg from "./modals/ModalPadreCateg";

const TablePadreCateg = () => {
  const [actualizar, setActualizar] = useState("");

  const [categoriasP, setCategoriasP] = useState({
    datos: [],
    loading: true,
  });

  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    getCategoriasP().then((respuesta) => {
      setCategoriasP({
        datos: respuesta.categoriasP,
        loading: false,
      });

      setTotpag(respuesta.Total);
    });
  }, []);


  useEffect(() => {
    updateDatos(pagina);
  }, [pagina, show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   ------------------------------

  const updateDatos = (pag) => {
    getCategoriasP(pag).then((respuesta) => {
      setCategoriasP({
        datos: respuesta.categoriasP,
        loading: false,
      });
    });
  };

  //---------------------------
  const borrarCategoriaP = (uid) => {
    let categP = categoriasP.datos.find((categoriaP) => {
      return categoriaP._id === uid;
    });

    let validar = window.confirm(
      `Esta seguro que quiere inactivar ${categP.nombre} de categorías?`
    );
    if (validar) {
      deleteCategoriaP(uid).then((respuesta) => {
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        updateDatos(pagina);
      });
    }
  };

  return (
    <div className="container">
      {/* Titulo */}
      <div className="row ">
        <div className="col">
          <h1>Categorias Padre</h1>
        </div>
      </div>
      {/* Fin Titulo */}
      {/* ------------------------------ */}
      {/* Titulo Tabla */}
      <div className="row appTabla mb-1">
        <div className="col-10 pt-3 pb-3">Nombre</div>
        <div className="col-2 mt-2 text-center">
          <button
            className="btn"
            onClick={() => {
              setActualizar("");
              handleShow();
            }}
          >
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo Tabla */}
      {/* ------------------------------ */}
      {/* Cuerpo Tabla */}
      {categoriasP.datos.map((categoriaP) => (
        <div className="row" key={categoriaP._id}>
          <div className="col-md-5 col-6 mt-2">{categoriaP.nombre}</div>
          <div className="col-md-5 col-2 mt-2"></div>
          <div className="col-md-1 col-2 mt-1">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActualizar(categoriaP._id);
                handleShow();
              }}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
          <div className="col-md-1 col-2 mt-1">
            <button
              className="btn btn-danger"
              onClick={() => borrarCategoriaP(categoriaP._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <hr className="mt-1" />
        </div>
      ))}

      {/* Cuerpo Tabla */}
      <div className="text-center">
        <BtnPaginacion totPag={totPag} pagina={pagina} setPagina={setPagina} />
      </div>
      <ModalPadreCateg
        show={show}
        handleClose={handleClose}
        actualizar={actualizar}
      />
    </div>
  );
};

export default TablePadreCateg;
