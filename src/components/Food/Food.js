import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import useStore from "../../hooks/useStore";
import "./Food.css";

const Food = ({ food, cartHandler }) => {
  const { name, img, description, price } = food;
  const { cart, removeToCart } = useStore();
  // const [remove, setRemove] = useState(false);
  let remove = false;
  for (let item of cart) {
    if (item.name === food.name) {
      remove = true;
    }
  }

  return (
    <Col lg={4} md={6}>
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
          <p
            className="justify-content-center align-items-center d-flex px-5 w-100 py-3 fw-bold text-light cart-add-button"
            variant="none"
          >
            {!remove ? (
              <Button onClick={() => cartHandler(food)}>
                <FontAwesomeIcon icon={faCartPlus} /> Add item
              </Button>
            ) : (
              <Button onClick={() => removeToCart(food)} variant="danger">
                Remove
              </Button>
            )}
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Food;
