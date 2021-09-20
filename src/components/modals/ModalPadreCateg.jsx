import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  getCategoriaPId,
  putCategoriaP,
  postCategoriaP,
} from "../../helpers/categoriasP";

const ModalPadreCateg = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
  });

  useEffect(() => {
    setFormValue({
      nombre: "",
    });
    if (actualizar) {
      getCategoriaPId(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.categoriaP.nombre,
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
      putCategoriaP(actualizar, formValue).then((respuesta) => {
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
      postCategoriaP(formValue).then((respuesta) => {
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
          <Modal.Title>{actualizar ? "Modificar Categoria Padre" : "Nueva Categoria Padre"}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ej: Bebidas saborizadas"
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
              Guardar cambios
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalPadreCateg;
