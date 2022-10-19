import React, { useState, useEffect } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const pacienteLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
  const [citas, setCitas] = useState(pacienteLocalStorage);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

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

      setValidated(true);

      const newCita = {
        id: id,
        nombre: nombre,
        dueno: dueno,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas,
      };

      setCitas([...citas, newCita]);
      setId(0);
      setNombre("");
      setDueno("");
      setFecha("");
      setHora("");
      setSintomas("");

      mostrarAlertaE();
    }
  };

  const borrarPaciente = (cita) => {
    const arregloModificado = citas.filter((item)=>item.id !== cita.id)
    setCitas(arregloModificado);
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
              <Form.Control required type="text" placeholder="Nombre de la mascota" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba el nombre de la mascota.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="my-4"
            >
              <Form.Label>Nombre del dueño:</Form.Label>
              <Form.Control required type="text" placeholder="Nombre del dueño" onChange={(e)=>setDueno(e.target.value)} value={dueno}/>
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Escriba el nombre del dueño.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="my-4"
            >
              <Form.Label>Fecha:</Form.Label>
              <Form.Control required type="date" onChange={(e)=>setFecha(e.target.value)} value={fecha}/>
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
              <Form.Control required type="time" onChange={(e)=>setHora(e.target.value)} value={hora}/>
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
                onChange={(e)=>setSintomas(e.target.value)} value={sintomas}
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
      <ListaCitas citas={citas} borrarPaciente={borrarPaciente}></ListaCitas>
    </Container>
  );
};

export default Formulario;
