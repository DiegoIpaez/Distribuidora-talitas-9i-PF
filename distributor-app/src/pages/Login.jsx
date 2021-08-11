import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory(); //permite modificar unos de los props que usa react router

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputLogin({
      ...inputLogin,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    //peticion al backend
    localStorage.setItem("crypto_app_user", JSON.stringify(inputLogin));
    history.push("/");
  }

  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-6 login-form">
          <form className="mt-4 " onSubmit={handleSubmit}>
            <div className="form-group">
              <h4 className="text-center mb-4">
                Bienvenido a <b>Negocio</b>
              </h4>
              <label for="exampleFormControlInput1">- Email address</label>
              <input
                onChange={handleChange}
                type="email"
                placeholder="Example@gmail.com"
                name="email"
                className="form-control mb-3"
                required
              />
              <label for="exampleFormControlInput1">- Password</label>
              <input
                onChange={handleChange}
                type="password"
                placeholder="Password"
                minLength="6"
                name="password"
                className="form-control mb-3"
                required
              />
              <button className="btn btn-danger btn-block " type="submit">
                Enviar
              </button>
              <br />
              <button className="btn mt-4">olvidaste tu contraseña?.</button>
              <hr />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
