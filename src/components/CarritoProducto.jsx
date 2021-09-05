import React, { useReducer } from "react";
import CarritoRecibo from "./CarritoRecibo";
import CarritoTable from "./CarritoTable";
import { carritoInitialState, carritoReducer } from "../helpers/carritoReducer";
import { TYPES } from "../helpers/carritoActions";

const CarritoProducto = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

  const { producto, cart } = state;

  const ncantidad = Object.values(cart).reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  return (
    <div className="row">
      {/* Tabla de Productos */}
      <div className="col-md-9 col-12">
        <div className="container">
          {/* Titulos de Tabla */}
          <div className="row carritoBox">
            <div className="col-md-4 pt-3 pb-3 text-center ">
              <span>Producto</span>
            </div>
            <div className="col-md-3 pt-3 pb-3 text-center ">
              <span>Precio por unidad</span>
            </div>
            <div className="col-md-4 pt-3 pb-3 text-center ">
              <span>Cantidad</span>
            </div>
            <div className="col-md-1 pt-3 pb-3 text-center "></div>
          </div>
          {/* Fin Titulos de Tabla */}

          {/* Cuerpo tabla */}
          <div>
            {producto.map((producto) => (
              <CarritoTable
                key={producto.id}
                data={producto}
                addToCart={addToCart}
                delFromCart={delFromCart}
              />
            ))}
          </div>

          {/* Fin de Cuerpo tabla */}
        </div>
      </div>
      {/* Fin de Tabla de Productos */}
      {/* ------------------ */}
      {/* Recibo del pedido */}
      <div className="col-md-3 col-12">
        <div className="container">
          <div className="row pagarBox pt-4 pb-4">
            <h5 className="text-center mb-3">Detalles del pedido</h5>
            <hr />
            <div>
              {cart.map((item, index) => (
                <CarritoRecibo key={index} data={item} />
              ))}
            </div>
            <div className="text-center mt-2">
            <button className="btn btn-danger" onClick={clearCart}>
                Limpiar Carrito
              </button>
            </div>
            <div className="col-md-8 mt-2">
              <h4>Total: </h4>
            </div>
            <div className="col-md-4 mt-2">
              <h5>${ncantidad}</h5>
            </div>
            <div className="text-center">
              <button className="btn btn-pedidoF mt-3">
                <i className="fas fa-shopping-cart  "></i>
                <span> Finalizar pedido</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin de recibo */}
    </div>
  );
};

export default CarritoProducto;
