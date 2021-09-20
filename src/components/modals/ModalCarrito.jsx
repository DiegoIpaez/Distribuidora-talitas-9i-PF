import React, { useEffect, useState } from "react";
import { postCarrito, getCarritoId, putCarrito } from "../../helpers/carrito";

import { Modal, Button } from "react-bootstrap";

const ModalCarrito = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    estados: "",
  });

  useEffect(() => {
    setFormValue({
      estados: "",
    });
    if (actualizar) {
      getCarritoId(actualizar).then((respuesta) => {
        setFormValue({
          estados: respuesta.CarritoListo.estados,
        });
      });
    }
  }, [actualizar]);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (actualizar) {
      putCarrito(actualizar, formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          estados: "",
        });
        handleClose();
      });
    } else {
      postCarrito(formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        setLoading(false);

        setFormValue({
          estados: "",
        });
        handleClose();
      });
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="tituloModal">
          <Modal.Title>
            {actualizar ? "Modificar Estado del pedido" : "Prueba pedido"}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Estado del pedido</label>
              <select
                className="form-select"
                name="estados"
                aria-label="Default select example"
                value={formValue.estados}
                onChange={handleChange}
                required
              >
                <option defaultValue="">Elige el estado</option>
                <option value="PROCESANDO">En proceso</option>
                <option value="PAUSA">En pausa</option>
                <option value="CANCELADO">Canselado</option>
                <option value="CUMPLIDO">Completado exitosamente</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="d-grid gap-2"
              variant="danger"
              onClick={handleClose}
            >
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

export default ModalCarrito;
