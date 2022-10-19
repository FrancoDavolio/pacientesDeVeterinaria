import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Citas = ({ citas, borrarPaciente }) => {
  return (
    <div>
      {citas.map((c, i) => {
        return (
          <Card style={{ width: "18rem" }}>
            <div className="row justify-content-around">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f534.png"
                className="col-6 "
              ></img>
              <div className="col-6 my-3">
                <h3>Mascota: <br />{c.nombre}</h3>
                <h5>Dueño: <br />{c.dueno}</h5>
              </div>
            </div>
            <hr />
            <Card.Body>
              <Form.Control required type="date" value={c.fecha} disabled />
              <Form.Control required type="time" value={c.hora} disabled />
              <Form.Control required type="text" value={c.sintomas} disabled />
              <hr />
              <Button
                variant="primary"
                onClick={() => {
                  borrarPaciente(c);
                }}
              >
                Borrar
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Citas;
