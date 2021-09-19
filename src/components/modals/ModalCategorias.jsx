import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  getCategoriaId,
  postCategoria,
  putCategoria,
} from "../../helpers/categorias";

const ModalCategorias = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
  });

  useEffect(() => {
    setFormValue({
      nombre: "",
    });
    if (actualizar) {
      getCategoriaId(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.categoria.nombre,
        });
      });
    }
  }, [actualizar]);

  const handleChange = (e) => {
    setFormValue({
      nombre: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (actualizar) {
      putCategoria(actualizar, formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          nombre: "",
        });
        handleClose();
      });
    } else {
      postCategoria(formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          nombre: "",
        });
        handleClose();
      });
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="tituloModal">
          <Modal.Title>{actualizar ? "Modificar Categoria" : "Nueva Categoria"}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ej: Fideos"
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalCategorias;
