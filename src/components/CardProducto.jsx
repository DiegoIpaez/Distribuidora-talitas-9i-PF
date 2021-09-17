import React from "react";
import { Link } from "react-router-dom";

const CardProducto = ({ producto, productos, cart, setCart }) => {
  let { _id, nombre, precio, image } = producto;

  // Funcion para agregar los productos al carrito
  const addCart = (_id) => {
    const producto = productos.filter((producto) => producto._id === _id);
    setCart([...cart, ...producto]);
  };

  //Funcion para eliminar el producto
  const delCart = (_id) => {
    const productos = cart.filter((producto) => producto._id !== _id);
    setCart(productos);
  };

  return (
    <>
      {productos ? (
        <div className="col-lg-3 col-md-6 col-12 mb-3  mt-2">
          <div className="text-center Producto">
            <Link to={`/product/${_id}`}>
              <img className="img-producto mb-4 mt-4" src={image} alt="" />
            </Link>
            <h6 className="titleProduct mb-3">
              <Link to={`/product/${_id}`} className="nameProducto">
                {nombre}
              </Link>
            </h6>
            <h6>
              <span className="marcaText ps-3 pe-3 pb-1">molinos</span>
            </h6>
            <h6 className="precio-producto mt-3 pe-1">${precio}</h6>
            <Link>
              <button
                className="btn btn-compra pe-5 ps-5 mb-3 mt-1"
                onClick={() => addCart(_id)}
              >
                <i className="fas fa-shopping-cart"></i> AGREGAR
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="row ">
          <div className="col-md-2 col-6 pt-3 pb-3 ">
            <img
              className="img-carrito pt-1 pb-1"
              src={image}
              alt=""
            />
          </div>

          {/* Breve descripcion */}
          <div className="col-md-2 col-6 pt-4 mt-1 pb-3">
            <span>{nombre}</span>
            <h6>Molinos</h6>
          </div>

          {/* Precio */}
          <div className="col-md-3 col-12 pt-5 pb-3  text-center cuerpoCarrito">
            <h6>${precio}</h6>
          </div>

          {/* Cantidades */}

          <div className="col-md-4 col-12 pt-4 mt-3 pb-3 text-center">
            <button className="btn btn-cantidad me-4">
              <b>-</b>
            </button>
            <span>1</span>
            <button
              className="btn btn-cantidad  ms-4"
              onClick={() => addCart(_id)}
            >
              <b>+</b>
            </button>
          </div>

          {/* Btn eliminar */}
          <div className="col-md-1 col-12 pt-4  pb-3 text-center cuerpoCarrito">
            <button
              className="btn btn-danger mt-3"
              onClick={() => delCart(_id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProducto;
