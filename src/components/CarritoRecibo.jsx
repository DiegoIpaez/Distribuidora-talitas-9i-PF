import React, { useState } from "react";
import { postCarrito } from "../helpers/carrito";

const CarritoRecibo = ({ cart }) => {
  const ncantidad = Object.values(cart).reduce(
    (acc, { precio, Unidad }) => acc + precio * Unidad,
    0
  );

  //  console.log(ncantidad)

  const [loading, setLoading] = useState(false);
  const [pedidos, setPedidos] = useState({
    item: "",
  });

  const añadirCart = (data) => {
    setLoading(true);
    postCarrito(pedidos).then((respuesta) => {
      if (respuesta.errors) {
        setLoading(false);
        return window.alert(respuesta.errors[0].msg);
      }
      setLoading(false);
      setPedidos({
        item: cart[0]._id,
      });
    });
  };
  // console.log(pedidos);
  return (
    <>
      <div className="row pagarBox pt-4 pb-4">
        <h5 className="text-center mb-3">Detalles del pedido</h5>
        <hr />
        <div>
          {cart.map((producto) => (
            <div className="row" key={producto._id}>
              <div className="col-9">
                <span className="me-4">
                  {producto.nombre} x{producto.Unidad}
                </span>
              </div>
              <div className="col-3">
                <span>${`${producto.precio * producto.Unidad}`}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8 mt-2">
          <h4>Total: ${ncantidad} </h4>
        </div>

        <div className="text-center">
          <button
            className="btn btn-pedidoF mt-3"
            disabled={loading}
            onClick={() => {
              añadirCart();
            }}
          >
            <i className="fas fa-shopping-cart "></i>
            <span> Finalizar pedido</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarritoRecibo;
