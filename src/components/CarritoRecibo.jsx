import React, { useState } from "react";
// import { postCarrito } from "../helpers/carrito";

const CarritoRecibo = ({ cart }) => {
  // const [pedidos, setPedidos] = useState({
  //   item: "",
  // });

  // const añadirCart = () => {
  //   postCarrito(pedidos).then((respuesta) => {
  //     if (respuesta.msg) {
  //       window.alert(respuesta.msg);
  //     }
  //     setPedidos({
  //       item: cart[0]._id,
  //     });
  //   });
  // };
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
                <span className="me-4">{producto.nombre} x1</span>
              </div>
              <div className="col-3">
                <span>${producto.precio}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8 mt-2">
          <h4>Total: </h4>
        </div>

        <div className="text-center">
          <button className="btn btn-pedidoF mt-3">
            <i className="fas fa-shopping-cart "></i>
            <span> Finalizar pedido</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarritoRecibo;
