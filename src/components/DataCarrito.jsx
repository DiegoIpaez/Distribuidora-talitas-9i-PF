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
            <div className="row ">
              <div className="col-md-2 col-6 pt-3 pb-3 ">
                <img
                  className="img-carrito pt-1 pb-1"
                  src="https://plazavea.vteximg.com.br/arquivos/ids/561697/20190288.jpg?v=637427440868130000"
                  alt=""
                />
              </div>

              {/* Breve descripcion */}
              <div className="col-md-2 col-6 pt-4 mt-1 pb-3">
                <span>Aceite Cocinero 1lt</span>
                <h6>Molinos</h6>
              </div>

              {/* Precio */}
              <div className="col-md-3 col-12 pt-5 pb-3  text-center cuerpoCarrito">
                <h6>$120,00</h6>
              </div>

              {/* Cantidades */}
              <div className="col-md-4 col-12 pt-4 mt-3 pb-3 text-center">
                <button className="btn btn-cantidad me-4">
                  <b>-</b>
                </button>
                <span>1</span>
                <button className="btn btn-cantidad  ms-4">
                  <b>+</b>
                </button>
              </div>

              {/* Btn eliminar */}
              <div className="col-md-1 col-12 pt-4  pb-3 text-center cuerpoCarrito">
                <button className="btn btn-danger mt-3">
                  <i className="fas fa-trash-alt"></i>
                </button>
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
            <div className="row pagarBox pt-4 pb-4">
              <h5 className="text-center mb-3">Detalles del pedido</h5>
              <hr />
              <div className="col-md-8">
                <h6 className="mb-3 mt-3 subtotalText">Subtotal:</h6>
                <h4>Total: </h4>
              </div>
              <div className="col-md-4">
                <h5 className="mb-3 mt-3 subtotalText">$150</h5>
                <h5>$150</h5>
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
        {/* Fin de total productos */}
      </div>
    </div>
  );
};

export default DataCarrito;
