import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ContextApi } from "../../App";
import "./SingleOrder.css";

const SingleOrder = ({ item }) => {
  const { up, down } = useContext(ContextApi);
  const { name, img, description, price, quantity } = item;

  return (
    <Card className="d-lg-flex flex-row">
      <Card.Img variant="top" src={img} className="single-order-image" />
      <Card.Body>
        <Card.Title>Food Name: {name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h3>Price: ${price * quantity}</h3>
        <p>Item Selected: {quantity}</p>
        <div>
          <Button onClick={() => up(item)} className="me-3">
            +
          </Button>
          <Button onClick={() => down(item)} variant="danger">
            {quantity === 1 ? "Remove" : "-"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleOrder;
