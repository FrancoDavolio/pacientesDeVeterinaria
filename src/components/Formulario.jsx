import React, { useState, useEffect } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const mostrarAlertaE = () => {
    alert("Datos enviados!");
  };

  const mostrarAlertaC = () => {
    alert("Completar todos los campos correctamente!");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      mostrarAlertaC();
      event.preventDefault();
      event.stopPropagation();
    } else {
      mostrarAlertaE();
      setValidated(true);
    }
  };

  return (
    <Container>
      <div className="border p-4">
        <h2>Llenar el formulario para crear una cita:</h2>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="my-4"
            >
              <Form.Label>Nombre de la mascota:</Form.Label>
              <Form.Control required type="text" placeholder="Nombre" />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba un nombre valido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="my-4"
            >
              <Form.Label>Nombre del dueño:</Form.Label>
              <Form.Control required type="text" placeholder="Aplellido" />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba un nombre valido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="my-4"
            >
              <Form.Label>Fecha:</Form.Label>
              <Form.Control required type="date" />
              <Form.Control.Feedback>BIen!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba un fecha valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom04"
              className="my-4"
            >
              <Form.Label>Hora:</Form.Label>
              <Form.Control required type="time" />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba una hora valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom05"
              className="my-4"
            >
              <Form.Label>Sintomas:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Describe sintomas"
              />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba el sintoma que tiene la mascota.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <hr />
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
      <ListaCitas></ListaCitas>
    </Container>
  );
};

export default Formulario;
