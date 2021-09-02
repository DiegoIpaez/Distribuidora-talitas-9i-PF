import React from "react";

import LoginUser from "../components/LoginUser";

export default function Login() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3 col-12"></div>
        <div className="col-md-6 col-12 login-form pt-4 pb-5">
          <div className="container">
            <LoginUser />
          </div>
        </div>
        <div className="col-md-3 col-12"></div>
      </div>
    </div>
  );
}
