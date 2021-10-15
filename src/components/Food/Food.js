import React, { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { ContextApi } from "../../App";
import "./Food.css";

const Food = ({ food, cartHandler }) => {
  const { name, img, description, price } = food;
  const { cart, removeToCart } = useContext(ContextApi);

  return (
    <Col lg={4}>
      <Card className="food-card">
        <Card.Img className="card-image" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold fs-6">{name}</Card.Title>
          <Card.Text>{description.slice(0, 25)}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between">
          <h3>Price: ${price}</h3>
          {cart.map((item) =>
            item.name === food.name ? (
              <Button
                key={item.id}
                onClick={() => removeToCart(food)}
                variant="danger"
              >
                Remove
              </Button>
            ) : (
              ""
            )
          )}
        </div>
        <Button variant="primary" onClick={() => cartHandler(food)}>
          Add item
        </Button>
      </Card>
    </Col>
  );
};

export default Food;
