import React from "react";
import TableCategorias from "../components/TableCategorias";
import TableProductos from "../components/TableProductos";
import TableUsuarios from "../components/TableUsuarios";

const Admin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mb-4 col-12">
          <TableUsuarios />
        </div>
        <div className="col-md-6 mt-5 mb-4 col-12">
          <TableCategorias />
        </div>
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
