import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  getCategoriaId,
  postCategoria,
  putCategoria,
} from "../../helpers/categorias";
import { getCategoriasP } from "../../helpers/categoriasP";

const ModalCategorias = ({ show, handleClose, actualizar }) => {
  const [categoriasPa, setCategoriasPa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    categoriaP: "",
  });

  useEffect(() => {
    getCategoriasP().then((respuesta) => {
      setCategoriasPa(respuesta.categoriasP);
    });
  }, []);

  useEffect(() => {
    setFormValue({
      nombre: "",
      categoriaP: "",
    });
    if (actualizar) {
      getCategoriaId(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.categoria.nombre,
          categoriaP: respuesta.categoria.categoriaP,
        });
      });
    }
  }, [actualizar]);

  const handleChange = ({ target }) => {
    if (target.name === "disponible") {
      setFormValue({
        ...formValue,
        [target.name]: target.checked,
      });
    } else {
      setFormValue({
        ...formValue,
        [target.name]: target.value,
      });
    }
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
          categoriaP: "",
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
          categoriaP: "",
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
            {actualizar ? "Modificar Categoria" : "Nueva Categoria"}
          </Modal.Title>
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
            <div className="form-group">
              <label>Categorias Padre</label>
              <select
                className="form-select"
                name="categoriaP"
                value={formValue.categoriaP}
                onChange={handleChange}
                required
              >
                <option defaultValue="">Elige una categoria Padre</option>
                {categoriasPa.map((categoriaS) => (
                  <option key={categoriaS._id} value={categoriaS._id}>
                    {categoriaS.nombre}
                  </option>
                ))}
              </select>
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
