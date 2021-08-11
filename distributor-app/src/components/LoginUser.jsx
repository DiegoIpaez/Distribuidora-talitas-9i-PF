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
          <h3 className='text-center'>Bienvenido a</h3>
          <h2 className='text-center mb-5'>Distribuidora las talitas</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:*</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            placeholder="user@gmail.com"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
          <Form.Label>Contraseña:*</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <span className='ps-2'>olvidaste tu contraseña?.</span>
        <hr />
        <div className="d-grid gap-2">
        <Button className='btn-loginUser' type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginUser;
