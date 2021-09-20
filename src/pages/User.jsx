import React from "react";
import UserCompras from "../components/UserCompras";
import UserDatos from "../components/UserDatos";

const User = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-12">
          <UserDatos />
        </div>
        <div className="col-md-8 col-12">
          <UserCompras />
        </div>
      </div>
    </div>
  );
};

export default User;
