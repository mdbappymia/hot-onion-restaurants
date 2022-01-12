import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useStore from "../../hooks/useStore";

const Shiping = () => {
  const history = useHistory();
  const [checked, setCkecked] = useState(false);
  const { clearCart, user, calculateTotal } = useStore();
  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()} className="w-75 m-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={user.email} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={user.displayName} disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" value={calculateTotal()} disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setCkecked(!checked)}
            type="checkbox"
            label="Accept terms of service"
          />
        </Form.Group>

        <Button
          onClick={() => {
            clearCart();
            history.replace("/ordered");
          }}
          disabled={!checked}
          variant="primary"
          type="submit"
        >
          Order Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Shiping;
