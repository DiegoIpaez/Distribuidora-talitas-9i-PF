import React from "react";

const DataCarrito = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Barra de Productos  */}
        <div className="col-md-8 col-12">
          <div className="container">
            {/* Titulos de Tabla */}
            <div className="row">
              <div className="col-md-4 pt-3 pb-3 text-center carritoBox">
                <span>Producto</span>
              </div>
              <div className="col-md-4 pt-3 pb-3 text-center carritoBox">
                <span>Precio por unidad</span>
              </div>
              <div className="col-md-4 pt-3 pb-3 text-center carritoBox">
                <span>Cantidad</span>
              </div>
            </div>
            {/* Fin Titulos de Tabla */}
            {/* Cuerpo tabla */}
            <div className="row">
              <div className="col-md-4 col-12 pt-3 pb-3 ">
                <img
                  className="img-carrito"
                  src="https://plazavea.vteximg.com.br/arquivos/ids/561697/20190288.jpg?v=637427440868130000"
                  alt=""
                />{" "}
                <span>hola</span>
              </div>
              {/* Precio */}
              <div className="col-md-4 col-12 pt-3 pb-3  text-center ">
                <span>$120,00</span>
              </div>
              {/* Cantidades */}
              <div className="col-md-4 col-12 pt-2 pb-3 text-center">
                <button className="btn pe-4">
                  <h4>-</h4>
                </button>
                <span>1</span>
                <button className="btn ps-4">
                  <h4>+</h4>
                </button>
              </div>
            </div>
            
            {/* Fin de Cuerpo tabla */}
          </div>
        </div>
        {/*Fin  Barra de Productos  */}
        {/* -------------------------------------------- */}
        {/* Total Productos */}
        <div className="col-md-4 col-12">
          <div className="container">
            <div className="row">
              <div className="col text-center ">
                <div className="pagarBox pt-4 pb-4">
                  <span>Detalles del pedido</span>
                  <h4>Total: $250</h4>
                  <button className="btn btn-warning">Pagar Ahora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de total productos */}
      </div>
    </div>
  );
};

export default DataCarrito;
