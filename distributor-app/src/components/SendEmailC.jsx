import React from "react";
import { Form, Button } from "react-bootstrap";

const SendEmailC = () => {
  return (
    <div className="container  formulario-c mt-4 pt-3 pb-3">
      <div className="row">
        <Form>
          <h3>Cuéntanos, ¿qué necesitas?</h3>
          <hr className="form-hr" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Nombre:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="name" placeholder="Horacio Godinez" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Telefono:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="phone" placeholder="*381 614 5611" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Email:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="email" placeholder="hello@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Asunto:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="phone" placeholder=" ..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Mensaje:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Escriba su mensaje aqui."
              style={{ height: "100px" }}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </div>

          <Form.Text className="text-muted">
            (We'll never share your email with anyone else.)
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default SendEmailC;
