import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

const Cd = (props) => {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [length, setLength] = useState("");

  const handleChange = (input) => (event) => {
    switch (input) {
      case "principle":
        setPrinciple(event.target.value);
        break;
      case "rate":
        setRate(event.target.value);
        break;
      case "length":
        setLength(event.target.value);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setPrinciple("");
    setRate("");
    setLength("");
  };

  return (
    <React.Fragment>
        <Form onSubmit={props.getResult}>
          <Form.Group controlId="principle">
            <Form.Label>Principle</Form.Label>
            <Form.Control
              type="number"
              placeholder="e.g. 1000"
              required
              value={principle}
              onChange={handleChange("principle")}
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
            <Form.Label>Length of investment</Form.Label>
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
            <Form.Label>Compound frequency</Form.Label>
            <Form.Control as="select" required>
              <option>Monthly</option>
              <option>Daily</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </Form.Control>
          </Form.Group>
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

export default React.memo(Cd);
