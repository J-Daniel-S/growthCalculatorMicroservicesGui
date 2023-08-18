import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

const Bond = (props) => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [length, setLength] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (input) => (event) => {
    switch (input) {
      case "price":
        setPrice(event.target.value);
        break;
      case "rate":
        setRate(event.target.value);
        break;
      case "length":
        setLength(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setPrice("");
    setRate("");
    setLength("");
    setNumber("");
  };

  return (
    <React.Fragment>
        <Form onSubmit={props.getResult}>
          <Form.Group controlId="principle">
            <Form.Label>Issue price</Form.Label>
            <Form.Control
              type="text"
              placeholder="per bond"
              required
              value={price}
              onChange={handleChange("price")}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="rate">
            <Form.Label>Interest rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="%"
              required
              value={rate}
              onChange={handleChange("rate")}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="investmentLength">
            <Form.Label>Length to maturity</Form.Label>
            <Form.Control
              type="input"
              placeholder="in months"
              required
              value={length}
              onChange={handleChange("length")}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="compound">
            <Form.Label>Payment frequency</Form.Label>
            <Form.Control as="select" required>
              <option>Monthly</option>
              <option>Daily</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group controlId="amount">
            <Form.Label>Number purchased</Form.Label>
            <Form.Control
              type="number"
              placeholder="#"
              required
              value={number}
              onChange={handleChange("number")}
            ></Form.Control>
          </Form.Group>
          <Form.Text className="text-muted">
            assumes the bond is not called
          </Form.Text>
          <br></br>
          <br></br>
          <Button type="submit">Get result</Button>
          {"   "}
          <Button variant="secondary" onClick={() => clearForm()}>
            Clear form
          </Button>
        </Form>
    </React.Fragment>
  );
};

export default React.memo(Bond);
