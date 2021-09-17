import React from "react";
import CardProducto from "./CardProducto";

const CarritoTable = ({ cart, setCart, productos }) => {

  // // Funcion para agregar los productos al carrito
  // const addCart = (_id) => {
  //   const producto = productos.filter((producto) => producto._id === _id);
  //   setCart([...cart, ...producto]);
  // };
 

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
            <CardProducto
              key={producto._id}
              producto={producto}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
    </>
  );
};

export default CarritoTable;
