import React from "react";

const CarritoTable = ({ cart, setCart }) => {
  // // Funcion para agregar los productos al carrito y sumar las cantidades
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

  //Funcion para reducir las cantidades
  const removeItem = (_id) => {
    const producto = cart.find((producto) => producto._id === _id);
    if (producto.Unidad === 1) {
      setCart(cart.filter((producto) => producto._id !== _id));
    } else {
      setCart(
        cart.map((product) =>
          product._id === _id
            ? { ...producto, Unidad: producto.Unidad - 1 }
            : product
        )
      );
    }
  };

  //Funcion para eliminar el producto
  const delCart = (_id) => {
    const productos = cart.filter((producto) => producto._id !== _id);
    setCart(productos);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="container">
          <div className="row text-center mt-4">
            <h5>No hay nada en su Carrito...</h5>
          </div>
        </div>
      ) : (
        cart.map((producto) => (
          <div className="row" key={producto._id}>
            <div className="col-md-2 col-6 pt-3 pb-3 ">
              <img
                className="img-carrito pt-1 pb-1"
                src={producto.image}
                alt=""
              />
            </div>

            {/* Breve descripcion */}
            <div className="col-md-2 col-6 pt-4 mt-1 pb-3">
              <span>{producto.nombre}</span>
              <h6>Molinos</h6>
            </div>

            {/* Precio */}
            <div className="col-md-3 col-12 pt-5 pb-3  text-center cuerpoCarrito">
              <h6>${producto.precio}</h6>
            </div>

            {/* Cantidades */}

            <div className="col-md-4 col-12 pt-4 mt-3 pb-3 text-center">
              <button
                className="btn btn-cantidad me-4"
                onClick={() => removeItem(producto._id)}
              >
                <b>-</b>
              </button>
              <span>{producto.Unidad}</span>
              <button
                className="btn btn-cantidad  ms-4"
                onClick={() => addCart(producto._id)}
              >
                <b>+</b>
              </button>
            </div>

            {/* Btn eliminar */}
            <div className="col-md-1 col-12 pt-4  pb-3 text-center cuerpoCarrito">
              <button
                className="btn btn-danger mt-3"
                onClick={() => delCart(producto._id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CarritoTable;
