import React from "react";
// import { getProductos } from "../helpers/productos"

const BtnCategorias = () => {
  // const [productos, setProductos] = useState([])

  // useEffect(() => {
  //   getProductos().then((respuesta)=>{
  //     setProductos(respuesta.productos)
  //   })
  // }, [])

  // console.log(productos)

  return (
    <div className="btn btn-categ me-2">
      {/* Contenedor */}
      <i className="fas fa-bars pe-1 iconos-nav"></i>
      <span>CATEGORIAS </span>
      <i className="fas fa-angle-down iconos-nav"></i>
      {/*Fin de Contenedor */}
      {/* ------------------ */}
      {/* Cuerpo del dropdown */}

      <div className="btn-categ-content container mt-2">
        {/* Categoria */}

        <div className="row mb-3">
          <div className="btn col-7">
            <span>Aceite y vinagre</span>
          </div>
          <div className="col-3"></div>
          <div className="btn col-2">
            <i className="fas fa-chevron-right"></i>
          </div>
          {/* Producto */}
          <div className="container btn-categ-content2">
            <div className="row mb-3">
              <div className="btn col-2">
                <span>Aceite</span>
              </div>
              <div className="col-8"></div>
              <div className="btn col-2">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Fin de Categoria */}
        {/* -------------- */}
      </div>

      {/* Fin Cuerpo Dropdown */}
    </div>
  );
};

export default BtnCategorias;
