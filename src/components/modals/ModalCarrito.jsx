import React, { useEffect, useState } from "react";
import { postCarrito, getCarritoId, putCarrito } from "../../helpers/carrito";
import { getProductos } from "../../helpers/productos";
import { Modal, Button } from "react-bootstrap";

const ModalCarrito = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [productosAg, setProductosAg] = useState([]);
  const [formValue, setFormValue] = useState({
    items: "",
    estados: "",
  });

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductosAg(respuesta.productos);
    });
  }, []);

  useEffect(() => {
    setFormValue({
      items: "",
      estados: "",
    });
    if (actualizar) {
      getCarritoId(actualizar).then((respuesta) => {
        setFormValue({
          items: respuesta.CarritoListo.items,
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
          items: "",
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
          items: "",
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
            {/* <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                name="usuario"
                className="form-control"
                placeholder="Ej: Pedro Perez"
                required
                value={formValue.usuario}
                onChange={handleChange}
              />
            </div> */}
            <div className="form-group">
              <label>Rol</label>
              <select
                className="form-select"
                name="rol"
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

            <div className="form-group">
              <label>Productos</label>
              <select
                className="form-select"
                name="items"
                aria-label="Default select example"
                value={formValue.items}
                onChange={handleChange}
                required
              >
                <option defaultValue="">Elige el item</option>
                {productosAg.map((productoA) => (
                  <option key={productoA._id} value={productoA._id}>
                    {productoA.nombre}
                  </option>
                ))}
               
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
