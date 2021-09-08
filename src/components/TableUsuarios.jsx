import React, { useEffect, useState } from "react";
import { getUsuarios, deleteUsuario } from "../helpers/usuarios";
import BtnPaginacion from "./BtnPaginacion";
import ModalUsuarioAdd from "./modals/ModalUsuariosAdd";

const TableUsuarios = () => {
  const [usuarios, setUsuarios] = useState({
    datos: [],
    loading: true,
  });
  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    getUsuarios().then((respuesta) => {
      setUsuarios({
        datos: respuesta.usuarios,
        loading: false,
      });
      setTotpag(respuesta.total);
    });
  }, []);

  useEffect(() => {
    updateDatos(pagina);
  }, [pagina, show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateDatos = (pag) => {
    getUsuarios(pag).then((respuesta) => {
      setUsuarios({
        datos: respuesta.usuarios,
        loading: false,
      });
    });
  };

  //---------------------------------------------
  const borrarUsuario = (uid) => {
    const user = JSON.parse(localStorage.getItem("auth")).usuario;

    if (user.uid === uid) {
      return window.alert("No puede eliminar el usuario en uso");
    }

    let validar = window.confirm(
      `Esta seguro que quiere eliminar a este usuario?`
    );
    if (validar) {
      deleteUsuario(uid).then((respuesta) => {
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        updateDatos(pagina);
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Usuarios</h1>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla mb-1">
        <div className="col-5 pt-3 pb-3">Nombre</div>
        <div className="col-5 pt-3 pb-3">Email</div>
        <div className="col-2 mt-2 text-center">
          <button className="btn" onClick={handleShow}>
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      {usuarios.datos.map((usuario) => (
        <div className="row" key={usuario.uid}>
          <div className="col-md-5 col-4 mt-2">{usuario.nombre}</div>
          <div className="col-md-5 col-6 mt-2">{usuario.email}</div>
          <div className="col-md-2 col-2 mt-1 text-center">
            <button className="btn btn-danger" onClick={() => borrarUsuario(usuario.uid)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <hr className="mt-1" />
        </div>
      ))}

      {/* Fin de cuerpo tabla */}
      <div className="text-center">
        <BtnPaginacion totPag={totPag} pagina={pagina} setPagina={setPagina} />
      </div>
      <ModalUsuarioAdd show={show} handleClose={handleClose} />
    </div>
  );
};

export default TableUsuarios;
