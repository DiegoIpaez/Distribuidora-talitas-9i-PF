import React from "react";
import {Link} from "react-router-dom"

const ProductId = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-12 ">
        <div className="col">
          <img
            className="img-id mb-4 pt-4 pb-4"
            src="https://plazavea.vteximg.com.br/arquivos/ids/561697/20190288.jpg?v=637427440868130000"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="mb-3">ACEITE COCINERO 1LT</h3>
              <span className="pe-3">MOLINOS</span>
              <span>|</span>
              <span className="ps-3 codigo-product">
                Código de producto: 22140120001
              </span>
              <hr />
              <span>Precio por unidad</span>
              <h1 className="precio-producto2 mt-1 mb-4">$ 120,00</h1>
              <Link to="/carrito">
              <button className="btn btn-compra ps-5 pe-5 mb-5">
                <i className="fas fa-shopping-cart"></i> AGREGAR
              </button></Link>
              <Link to="/">
              <button className="btn btn-volver ms-2 mb-5">VOLVER</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
