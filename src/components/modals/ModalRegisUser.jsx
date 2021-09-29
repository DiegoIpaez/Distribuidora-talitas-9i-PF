import React, { useState } from "react";
import { postUsuario } from "../../helpers/usuarios";
import { Modal, Button } from "react-bootstrap";
// import * as emailjs from "emailjs-com";

// const SERVICE_ID = "service_fr0y6dh";
// const TEMPLATE_ID = "template_kb5deza";
// const USER_ID = "user_JC9UeN1IaGcp4JNjv776i";

const ModalRegisUser = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "USER_ROLE",
  });

      // if (nombre && email && password) {
      //   console.log(`nombre:${nombre}, email:${email}, password${password}`);
      //   const templeteParams = {
      //     from_name: "Distribuidora Las Talitas",
      //     to_name: nombre,
      //     messege: "Bienvenido, se realizó con exito tu registro.",
      //     to: email,
      //   };
      //   console.log(templeteParams);

      //   emailjs.send(SERVICE_ID, TEMPLATE_ID, templeteParams, USER_ID).then(
      //     function (response) {
      //       console.log("SUCCES!", response.status, response.text);
      //     },
      //     function (error) {
      //       console.log("FAILED...", error);
      //     }
      //   );

      //   const apiResponse = {
      //     ok: true,
      //     msg: "Registro exitoso."
      //   }
      // }

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    postUsuario(formValue).then((respuesta) => {
      //   console.log(respuesta);
      if (respuesta.errors) {
        setLoading(false);
        return window.alert(respuesta.errors[0].msg);
      }
      setLoading(false);
      setFormValue({
        nombre: "",
        email: "",
        password: "",
        rol: "USER_ROLE",
      });
      handleClose();
    });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <div className="cuerpoModal">
          <Modal.Header className="tituloModal">
            <Modal.Title className="text-white">Bienvenido!</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <div className="form-group mb-3">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Ej: Pedro Perez"
                  required
                  value={formValue.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="pedroperez@gmail.com"
                  required
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formValue.password}
                  onChange={handleChange}
                />
              </div>
              {/*  */}
            </Modal.Body>
            <Modal.Footer>
              <div className="container">
                <div className="row mb-2">
                  <Button variant="warning" type="submit" disabled={loading}>
                    Registrarse
                  </Button>
                </div>
                <div className="row">
                  <Button onClick={handleClose}>
                    ¿Ya tienes una cuenta? Haz clic aquí.
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRegisUser;
