import React, { useEffect, useState } from "react";
import { getCarrito } from "../helpers/carrito";
import BtnPaginacion from "./BtnPaginacion";
import ModalCarrito from "./modals/ModalCarrito";

const TablaCarrito = () => {
  const [carrito, setCarrito] = useState({
    datos: [],
    loading: true,
  });

  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    getCarrito().then((respuesta) => {
      setCarrito({
        datos: respuesta.producto,
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

  //   --------------------------------------

  const updateDatos = (pag) => {
    getCarrito(pag).then((respuesta) => {
      setCarrito({
        datos: respuesta.producto,
        loading: false,
      });
    });
  };

  //   --------------------------------------

  // const borrarCarrito = (uid) => {
  //   const carrit = carrito.datos.find((carri) => {
  //     return carri._id === uid;
  //   });

  //   let validar = window.confirm(
  //     `Esta seguro que quiere inactivar el pedido ${carrit._id}`
  //   );

  //   if (validar) {
  //     deleteCarrito(uid).then((respuesta) => {
  //       if (respuesta.msg) {
  //         window.alert(respuesta.msg);
  //       }
  //       updateDatos(pagina);
  //     });
  //   }
  // };

  return (
    <div className="container">
      <div className="row">
        <h1>Pedidos</h1>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla mb-1">
        <div className="col-5 pt-3 pb-3">Id</div>
        <div className="col-5 pt-3 pb-3">Usuario</div>
        <div className="col-2 mt-2 text-center">
          <button className="btn" onClick={handleShow}>
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      {carrito.datos.map((carrit) => (
        <div className="row" key={carrit._id}>
          <div className="col-md-5 col-4 mt-2">{carrit._id}</div>
          <div className="col-md-5 col-6 mt-2">{carrit.usuario.email}</div>
          <div className="col-md-2 col-2 mt-1 text-center">
            {/* <button className="btn btn-danger" onClick={() => borrarCarrito(carrit._id)}>
              <i className="fas fa-trash-alt"></i>
            </button> */}
          </div>
          <hr className="mt-1" />
        </div>
      ))}

      {/* Fin de cuerpo tabla */}
      <div className="text-center">
        <BtnPaginacion totPag={totPag} pagina={pagina} setPagina={setPagina} />
      </div>
      <ModalCarrito show={show} handleClose={handleClose} />
    </div>
  );
};

export default TablaCarrito;
