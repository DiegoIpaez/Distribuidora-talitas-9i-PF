import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCategorias = ({ show }) => {
  return (
    <div>
      {/* <Modal show={show} onHide="" centered>
        <Modal.Header closeButton>
          <Modal.Title>Nueva categoria</Modal.Title>
        </Modal.Header>
        <form onSubmit="">
          <Modal.Body>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ej: Bebidas saborizadas"
                required
                value=""
                onChange=""
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick="">
              Close
            </Button>
            <Button variant="success" type="submit" disabled="">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal> */}
    </div>
  );
};

export default ModalCategorias;
