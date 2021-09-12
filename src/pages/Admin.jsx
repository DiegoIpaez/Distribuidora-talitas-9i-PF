import React, { useEffect, useState } from "react";
import TablePadreCateg from "../components/TablePadreCateg";
import TableCategorias from "../components/TableCategorias";
import TableProductos from "../components/TableProductos";
import TableUsuarios from "../components/TableUsuarios";

const Admin = () => {
  const [state, setState] = useState({ rol: "" });

  useEffect(() => {
    
    const datos = JSON.parse(localStorage.getItem("auth"))
    setState(datos.usuario)
  }, [state.rol])

  if(state.rol !== "ADMIN_ROLE"){
    return(
      <div className="alert alert-danger text-center" role="alert">
      🚫No autorizado🚫
    </div>
    )
  }

 

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
          <TableUsuarios />
        </div>
        <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
          <TableCategorias />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
          <TablePadreCateg />
        </div>
        <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12"></div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12 mt-5">
          <TableProductos />
        </div>
      </div>
    </div>
  );
};

export default Admin;
