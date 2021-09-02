import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const LoginUser = () => {
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
    <div className="row">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center">Bienvenido a </h3>
        <h3 className="text-center">Distribuidora las Talitas</h3>
        <hr class="userlogin-hr mb-4" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Email:<span className="text-required">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            placeholder="user@gmail.com"
            className="inputLoginUser"
          />
          <Form.Text className="text-muted ps-1">
            (* We'll never share your email with anyone else.)
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
          <Form.Label>
            Contraseña:<span className="text-required">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="inputLoginUser"
          />
        </Form.Group>
        <span className="ps-2">olvidaste tu contraseña?.</span>
        <hr />
        <div className="d-grid gap-2">
          <Button className="btn-loginUser" type="submit">
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginUser;
