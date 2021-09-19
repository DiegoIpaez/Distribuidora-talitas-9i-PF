import React from "react";
import { Link } from "react-router-dom";

const CardProducto = ({ producto, productos, cart, setCart }) => {
  let { _id, nombre, precio, image } = producto;

  // Funcion para agregar los productos al carrito
  const addCart = (_id) => {
    const producto = cart.find((producto) => producto._id === _id);
    if (producto) {
      setCart(
        cart.map((product) =>
          product._id === _id
            ? { ...producto, Unidad: producto.Unidad + 1 }
            : product
        )
      );
    } else {
      setCart([...cart, { ..._id, Unidad: 1 }]);
    }
  };

  return (
    <>
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

          <button
            className="btn btn-compra pe-5 ps-5 mb-3 mt-1"
            onClick={() => addCart(producto)}
          >
            <i className="fas fa-shopping-cart"></i> AGREGAR
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProducto;
