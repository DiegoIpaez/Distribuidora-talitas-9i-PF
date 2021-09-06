import React from "react";
import { Form, Button } from "react-bootstrap";

const UserDatos = () => {
  return (
    <div className="container mt-5 UserBoxData pt-4 pb-4">
      <Form>
        <h3 className="text-center pb-2">Datos personales</h3>
        <hr />
        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="name"  />
            </Form.Group>
          </div>
          <div className="col">
            {" "}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="name"  />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Fecha de Nac.</Form.Label>
              <Form.Control type="password" placeholder="13/06/2000" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cod. area</Form.Label>
              <Form.Control type="number" placeholder="3000" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="phone" placeholder="3816136233" />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control type="text" placeholder="DNI.." />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Documento</Form.Label>
              <Form.Control type="text" placeholder="42156746" />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="lol@gmail.com" />
        </Form.Group>

        <div className="row text-center mt-3">
          <div className="col-md-6">
            <Button variant="" type="submit">
              Cancelar
            </Button>
          </div>
          <div className="col-md-6">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserDatos;
