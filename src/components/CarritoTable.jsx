import React from "react";

const CarritoTable = ({ data, addToCart, delFromCart}) => {
  let { id, name, price } = data;
  return (
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
        <span>{name}</span>
        <h6>Molinos</h6>
      </div>

      {/* Precio */}
      <div className="col-md-3 col-12 pt-5 pb-3  text-center cuerpoCarrito">
        <h6>${price}</h6>
      </div>

      {/* Cantidades */}
      <div className="col-md-4 col-12 pt-4 mt-3 pb-3 text-center">
        <button className="btn btn-cantidad me-4" onClick={() => delFromCart(id)}>
          <b>-</b>
        </button>
        <span>1</span>
        <button
          className="btn btn-cantidad  ms-4"
          onClick={() => addToCart(id)}
        >
          <b>+</b>
        </button>
      </div>

      {/* Btn eliminar */}
      <div className="col-md-1 col-12 pt-4  pb-3 text-center cuerpoCarrito">
        <button className="btn btn-danger mt-3" onClick={() => delFromCart(id, true)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      
    </div>
  );
};

export default CarritoTable;
