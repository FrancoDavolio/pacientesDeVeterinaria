import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Card = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="row">
            <div className="col-2">
                
            </div>
            <div className="col-10 my-3">
                <h3></h3>
                <h5></h5>
            </div>
        </div>
        <hr />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form.Control required type="text" value={(hfg)}  disabled/>
          <Button variant="primary">Borrar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card;
