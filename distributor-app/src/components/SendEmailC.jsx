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
            <Form.Control type="name" placeholder="Horacio Godinez" className="input-hoverContact" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Telefono:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="phone" placeholder="*381 614 5611" className="input-hoverContact" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Email:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="email" placeholder="hello@gmail.com" className="input-hoverContact" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Asunto:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control type="phone" placeholder=" ..." className="input-hoverContact" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Mensaje:<span className="text-required">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Escriba su mensaje aqui."
              style={{ height: "100px" }}
              className="input-hoverContact"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className='btn-contactoForm mt-1' type="submit">
              Enviar
            </Button>
          </div>

          <Form.Text className="text-muted">
            (* Su mensaje sera contestado a la brevedad.)
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default SendEmailC;
