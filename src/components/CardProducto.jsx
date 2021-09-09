import React from "react";
import { Link } from "react-router-dom";

const CardProducto = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-lg-3 col-md-6 col-12 mb-3  mt-2" key={producto._id}>
          <div className="text-center Producto">
            <Link to={`/product/${producto._id}`}>
              <img
                className="img-producto mb-4 mt-4"
                src="https://plazavea.vteximg.com.br/arquivos/ids/561697/20190288.jpg?v=637427440868130000"
                alt=""
              />
            </Link>
            <h6 className="titleProduct mb-3">
              <Link to={`/product/${producto._id}`} className="nameProducto">
                {producto.nombre}
              </Link>
            </h6>
            <h6>
              <span className="marcaText ps-3 pe-3 pb-1">molinos</span>
            </h6>
            <h6 className="precio-producto mt-3 pe-1">$120,00</h6>
            <Link to={`/product/${producto._id}`}>
              <button className="btn btn-compra pe-5 ps-5 mb-3 mt-1">
                <i className="fas fa-shopping-cart"></i> AGREGAR
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProducto;
