import React, { useEffect, useState } from "react";
import { getProducto } from "../helpers/productos";
import { Link, useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getProducto(id).then((respuesta) => {
      setProducto({
        data: respuesta.producto,
        loading: false,
      });
    });
  }, [id]);

  console.log(producto);

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col mt-2 atajos-id">
          <span className="pe-4">
            <Link to="/" className="atajos-text">
              Inicio
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4">
            <Link to="/ola" className="atajos-text">
              Aceite
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4">
            <Link className="atajos-text">
              {producto.data.nombre}
            </Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-md-6 col-12 ">
          <div className="col">
            <img
              className="img-id mb-4 pt-4 pb-4"
              src={producto.data.image}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="mb-3">{producto.data.nombre}</h3>
                <span className="pe-3">MOLINOS</span>
                <span>|</span>
                <span className="ps-3 codigo-product">
                  Código de producto: {producto.data.cod_Producto}
                </span>
                <hr />
                <span>Precio por unidad</span>
                <h1 className="precio-producto2 mt-1 mb-4">
                  $ {producto.data.precio}
                </h1>
                <Link to="/carrito">
                  <button className="btn btn-compra ps-5 pe-5 mb-5">
                    <i className="fas fa-shopping-cart"></i> AGREGAR
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn btn-volver ms-2 mb-5">VOLVER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ProductScreen;
