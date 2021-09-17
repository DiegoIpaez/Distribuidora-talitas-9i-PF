import React from "react";

const CarritoRecibo = ({ cart }) => {
  console.log(cart);

  return (
    <>
      <div className="row pagarBox pt-4 pb-4">
        <h5 className="text-center mb-3">Detalles del pedido</h5>
        <hr />
        <div>
          {cart.map((producto) => (
            <div key={producto._id}>
              <span className="me-4">{producto.nombre} x1</span>
              <span>${producto.precio}</span>
            </div>
          ))}
        </div>
        <div className="col-md-8 mt-2">
          <h4>Total: </h4>
        </div>
        <div className="text-center">
          <button className="btn btn-pedidoF mt-3">
            <i className="fas fa-shopping-cart  "></i>
            <span> Finalizar pedido</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarritoRecibo;
