import React from "react";

const DataCarrito = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Barra de Productos  */}
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
            <div className="row">
              <div className="col-md-4 col-12 pt-3 pb-3 ">
                <img
                  className="img-carrito"
                  src="https://plazavea.vteximg.com.br/arquivos/ids/561697/20190288.jpg?v=637427440868130000"
                  alt=""
                />
                lol owo producto
              </div>
              {/* Precio */}
              <div className="col-md-3 col-12 pt-4 pb-3  text-center ">
                <span>$120,00</span>
              </div>
              {/* Cantidades */}
              <div className="col-md-4 col-12 pt-3 pb-3 text-center">
                <button className="btn me-4">
                  <h4>-</h4>
                </button>
                <span>1</span>
                <button className="btn ms-4">
                  <h4>+</h4>
                </button>
              </div>
              {/* Btn eliminar */}
              <div className="col-md-1 col-12 pt-4 pb-3 text-center">
                <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
              </div>
              <hr />
            </div>

            {/* Fin de Cuerpo tabla */}
          </div>
        </div>
        {/*Fin  Barra de Productos  */}
        {/* -------------------------------------------- */}
        {/* Total Productos */}
        <div className="col-md-3 col-12">
          <div className="container">
            <div className="row">
              <div className="col pagarBox">
                <div className="pt-4 pb-4">
                  <h5 className="text-center mb-3">Detalles del pedido</h5>
                  <hr />
                  <h6 className="mb-3 mt-4 subtotalText">Subtotal: $250</h6>
                  <h4>Total: $250</h4>
                  <div className="text-center">
                    <button className="btn btn-pedidoF mt-3">
                      <i className="fas fa-shopping-cart  "></i>
                      <span> Finalizar pedido</span>
                    </button>
                  </div>
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
