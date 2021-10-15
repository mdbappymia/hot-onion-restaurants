import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="d-flex justify-content-between">
            <h3>Price: ${price}</h3>
          </div>
        </Card.Body>
        <div className="select-item">
          <div className="align-items-center justify-content-center">
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
          <p
            className="justify-content-center align-items-center d-flex px-5 w-100 py-3 fw-bold text-light cart-add-button"
            variant="none"
            onClick={() => cartHandler(food)}
          >
            <Button>
              <FontAwesomeIcon icon={faCartPlus} /> Add item
            </Button>
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Food;
