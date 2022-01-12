import { Card, Button, Col, Row } from "react-bootstrap";
import useStore from "../../hooks/useStore";
import "./SingleOrder.css";

const SingleOrder = ({ item }) => {
  const { up, down } = useStore();
  const { name, img, description, price, quantity } = item;

  // const productPrice = price * quantity
  return (
    <Row className="single-order-card">
      <Col lg={3} sm={12}>
        <img variant="top" src={img} className="img-fluid" alt={name} />
      </Col>
      <Col lg={9} sm={12}>
        <Card.Title className="fw-bold">Food Name: {name}</Card.Title>
        <Card.Text className="text-secondary">{description}</Card.Text>
        <h3>Price: ${(price * quantity).toFixed(2)}</h3>
        <p>Item Selected: {quantity}</p>
        <div>
          <Button onClick={() => up(item)} className="me-3">
            +
          </Button>
          <Button onClick={() => down(item)} variant="danger">
            {quantity === 1 ? "Remove" : "-"}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default SingleOrder;
