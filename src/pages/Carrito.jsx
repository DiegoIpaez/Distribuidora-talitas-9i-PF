import React, { useEffect, useState } from "react";
import { getProductos } from "../helpers/productos";
import CarritoRecibo from "../components/CarritoRecibo";
import CarritoTable from "../components/CarritoTable";
import { useLocalStorage } from "../helpers/localStorageCart";

const Carrito = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductos(respuesta.productos);
    });
  }, []);

  // Estado del carrito
  const [cart, setCart] = useLocalStorage("carrito", []);

  console.log(cart);

  return (
    <div className="container mt-5 ">
      <div className="row">
        {/* Carrito Producto */}
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
                <CarritoTable
                  productos={productos}
                  cart={cart}
                  setCart={setCart}
                />
              </div>

              {/* Fin de Cuerpo tabla */}
            </div>
          </div>
          {/* Fin de Tabla de Productos */}
          {/* ------------------ */}
          {/* Recibo del pedido */}
          <div className="col-md-3 col-12">
            <div className="container">
              <CarritoRecibo cart={cart} setCart={setCart} />
            </div>
          </div>
          {/* Fin de recibo */}
        </div>
        {/* Fin Carrito Producto */}
      </div>
    </div>
  );
};

export default Carrito;
