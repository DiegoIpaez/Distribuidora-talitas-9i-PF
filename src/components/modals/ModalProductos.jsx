import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  getProducto,
  postProducto,
  putProducto,
} from "../../helpers/productos";
import { getCategorias } from "../../helpers/categorias";

const ModalProductos = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [formValue, setFormValue] = useState({
    nombre: "",
    precio: "",
    Unidad: "",
    image: "",
    descripcion: "",
    cod_Producto: "",
    cod_Barras: "",
    Ganancia: "",
    Impuesto_Interno: "",
    Precio_Lista1: "",
    Precio_Lista2: "",
    Precio_Lista3: "",
    categoria: "",
    disponible: true,
  });

  useEffect(() => {
    getCategorias().then((respuesta) => {
      setCategorias(respuesta.categorias);
    });
  }, []);

  useEffect(() => {
    setFormValue({
      nombre: "",
      precio: "",
      Unidad: "",
      image: "",
      descripcion: "",
      cod_Producto: "",
      cod_Barras: "",
      Ganancia: "",
      Impuesto_Interno: "",
      Precio_Lista1: "",
      Precio_Lista2: "",
      Precio_Lista3: "",
      categoria: "",
      disponible: true,
    });
    if (actualizar) {
      getProducto(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.producto.nombre,
          precio: respuesta.producto.precio,
          Unidad: respuesta.producto.Unidad,
          image: respuesta.producto.image,
          descripcion: respuesta.producto.descripcion,
          cod_Producto: respuesta.producto.cod_Producto,
          cod_Barras: respuesta.producto.cod_Barras,
          Ganancia: respuesta.producto.Ganancia,
          Impuesto_Interno: respuesta.producto.Impuesto_Interno,
          Precio_Lista1: respuesta.producto.Precio_Lista1,
          Precio_Lista2: respuesta.producto.Precio_Lista2,
          Precio_Lista3: respuesta.producto.Precio_Lista3,
          categoria: respuesta.producto.categoria._id,
          disponible: respuesta.producto.disponible,
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
      putProducto(actualizar, formValue).then((respuesta) => {
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
          precio: "",
          Unidad: "",
          image: "",
          cod_Producto: "",
          cod_Barras: "",
          Ganancia: "",
          Impuesto_Interno: "",
          Precio_Lista1: "",
          Precio_Lista2: "",
          Precio_Lista3: "",
          descripcion: "",
          categoria: "",
          disponible: true,
        });
        handleClose();
      });
    } else {
      postProducto(formValue).then((respuesta) => {
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
          precio: "",
          Unidad: "",
          image: "",
          cod_Producto: "",
          cod_Barras: "",
          Ganancia: "",
          Impuesto_Interno: "",
          Precio_Lista1: "",
          Precio_Lista2: "",
          Precio_Lista3: "",
          descripcion: "",
          categoria: "",
          disponible: true,
        });
        handleClose();
      });
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="tituloModal" closeButton>
          <Modal.Title>
            {actualizar ? "Modificar producto" : "Nuevo producto"}
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
                placeholder="Ej: Café Torrado"
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input
                type="number"
                name="precio"
                className="form-control"
                value={formValue.precio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Unidad</label>
              <input
                type="number"
                name="Unidad"
                className="form-control"
                value={formValue.Unidad}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Codigo de Producto</label>
              <input
                type="number"
                name="cod_Producto"
                className="form-control"
                value={formValue.cod_Producto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Codigo de Barras</label>
              <input
                type="number"
                name="cod_Barras"
                className="form-control"
                value={formValue.cod_Barras}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Imagen(Url)</label>
              <input
                type="text"
                name="image"
                className="form-control"
                placeholder="http:www.image.com"
                required
                value={formValue.image}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ganancia</label>
              <input
                type="number"
                name="Ganancia"
                className="form-control"
                value={formValue.Ganancia}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Impuesto Interno</label>
              <input
                type="number"
                name="Impuesto_Interno"
                className="form-control"
                value={formValue.Impuesto_Interno}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio Lista 1</label>
              <input
                type="number"
                name="Precio_Lista1"
                className="form-control"
                value={formValue.Precio_Lista1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio Lista 2</label>
              <input
                type="number"
                name="Precio_Lista2"
                className="form-control"
                value={formValue.Precio_Lista2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio Lista 3</label>
              <input
                type="number"
                name="Precio_Lista3"
                className="form-control"
                value={formValue.Precio_Lista3}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                type="text"
                name="descripcion"
                className="form-control"
                value={formValue.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Categorias</label>
              <select
                className="form-select"
                name="categoria"
                value={formValue.categoria}
                onChange={handleChange}
                required
              >
                {categorias.map((categoria) => (
                  <option key={categoria._id} value={categoria._id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={formValue.disponible}
                value={formValue.disponible}
                onChange={handleChange}
                name="disponible"
              />
              <label>Disponible</label>
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

export default ModalProductos;
