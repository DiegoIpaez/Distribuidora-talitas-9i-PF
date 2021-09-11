import React, { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../helpers/productos";
import BtnPaginacion from "./BtnPaginacion";
import ModalProductos from "./modals/ModalProductos";

const TableProductos = () => {
  const [actualizar, setActualizar] = useState("");
  const [productos, setProductos] = useState({
    datos: [],
    loading: true,
  });

  // useState  de BtnPaginacion
  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  // Modal State
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductos({
        datos: respuesta.productos,
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

  // --------------------------------------------

  const updateDatos = (pag) => {
    getProductos(pag).then((respuesta) => {
      setProductos({
        datos: respuesta.productos,
        loading: false,
      });
    });
  };

  // -------------------------------------------

  const borrarProducto = (uid) => {
    let produc = productos.datos.find((producto) => {
      return producto._id === uid;
    });

    let validar = window.confirm(
      `Esta seguro que quiere inactivar el producto ${produc.nombre}?`
    );

    if (validar) {
      deleteProducto(uid).then((respuesta) => {
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
      <div className="row">
        <div className="col">
          <h1>Productos</h1>
        </div>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla mb-1">
        <div className="col-md-3 col-4 pt-3 pb-3 ">Nombres</div>
        <div className="col-md-2 col-4 pt-3 pb-3">Disponible</div>
        <div className="col-md-2 col-4 pt-3 pb-3">Precio</div>
        <div className="col-md-3 col-6 pt-3 pb-3">Categorias</div>
        <div className="col-md-2 col-6 mt-2 text-center">
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
      {productos.datos.map((producto) => (
        <div className="row" key={producto._id}>
          <div className="col-md-3 col-6 mt-2">{producto.nombre}</div>
          <div className="col-md-2 col-6 mt-2">
            {producto.disponible ? "Disponible" : "No disponible"}
          </div>
          <div className="col-md-2 col-12 mt-2">${producto.precio}</div>
          <div className="col-md-3 col-6 mt-2">{producto.categoria.nombre}</div>
          <div className="col-md-2 col-6 mt-1 text-center">
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                setActualizar(producto._id);
                handleShow();
              }}
            >
              <i className="far fa-edit"></i>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => borrarProducto(producto._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>

          <hr className="mt-1" />
        </div>
      ))}

      {/* Fin de Cuerpo Tabla */}
      <div className="text-center">
        <BtnPaginacion totPag={totPag} pagina={pagina} setPagina={setPagina} />
      </div>
      <ModalProductos
        show={show}
        handleClose={handleClose}
        actualizar={actualizar}
      />
    </div>
  );
};

export default TableProductos;
