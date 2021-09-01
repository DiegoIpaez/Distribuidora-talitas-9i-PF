import React from "react";
import TableCategorias from "../components/TableCategorias";
import TableProductos from "../components/TableProductos";
import TableUsuarios from "../components/TableUsuarios";

const Admin = () => {
  return (
    <div className="container">
      <div className="row">
        <TableUsuarios />
        <TableCategorias />
      </div>
      <div className="row">
        <TableProductos />
      </div>
    </div>
  );
};

export default Admin;
