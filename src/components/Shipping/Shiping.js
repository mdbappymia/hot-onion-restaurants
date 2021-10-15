import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Shiping = () => {
  const [checked, setCkecked] = useState(false);
  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()} className="w-75 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setCkecked(!checked)}
            type="checkbox"
            label="Accept terms of service"
          />
        </Form.Group>
        <Button disabled={!checked} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Shiping;
