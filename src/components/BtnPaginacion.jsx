import React from "react";

const BtnPaginacion = ({ totPag, pagina, setPagina, limite = 5 }) => {
  let total = totPag;
  const nextPag = () => {
    if (total > pagina + limite) {
      setPagina(pagina + limite);
    }
  };

  const prevPag = () => {
    if (pagina > 0) {
      setPagina(pagina - limite);
    }
  };
  return (
    <>
      <button
        className="btn btn-paginacion"
        onClick={prevPag}
        disabled={pagina === 0 ? true : false}
      >
        <i className="fa fa-chevron-left me-1"></i>
      </button>
      <button
        className="btn btn-paginacion ms-2"
        disabled={total - (pagina + limite) <= 0 ? true : false}
        onClick={nextPag}
      >
        <i className="fa fa-chevron-right ms-1"></i>
      </button>
    </>
  );
};

export default BtnPaginacion;
