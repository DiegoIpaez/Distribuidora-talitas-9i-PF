import React, { useEffect, useState } from "react";
import { postCarrito } from "../../helpers/carrito";
import { getProductos } from "../../helpers/productos";
import { Modal, Button } from "react-bootstrap";

const ModalCarrito = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [productosAg, setProductosAg] = useState([]);
  const [formValue, setFormValue] = useState({
    items: "",
  });

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductosAg(respuesta.productos);
    });
  }, []);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    postCarrito(formValue).then((respuesta) => {
      if (respuesta.errors) {
        setLoading(false);
        return window.alert(respuesta.errors[0].msg);
      }
      setLoading(false);

      setFormValue({
        items: "",
      });
      handleClose();
    });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Alta de Usuario</Modal.Title>
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
              <label>Productos</label>
              <select
                className="form-select"
                name="items"
                aria-label="Default select example"
                value={formValue.items}
                onChange={handleChange}
                required
              >
                {productosAg.map((productoA) => (
                  <option key={productoA._id} value={productoA._id}>
                    {productoA.nombre}
                  </option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalCarrito;
