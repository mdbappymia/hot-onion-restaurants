import React from "react";
import { Container, Nav, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStore from "../../hooks/useStore";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const { categorySelected, categoryfoods, cartHandler, cart } = useStore();
  let disabled = true;
  if (cart.length) {
    disabled = false;
  }

  return (
    <Container>
      <div>
        <Nav defaultActiveKey="#breakfast" className="justify-content-center">
          <Nav.Link
            onClick={() => categorySelected("breakfast")}
            className="foods-category"
            href="#breakfast"
          >
            Breakfast
          </Nav.Link>
          <Nav.Link
            onClick={() => categorySelected("lunch")}
            className="foods-category"
            href="#launch"
          >
            Launch
          </Nav.Link>
          <Nav.Link
            onClick={() => categorySelected("dinner")}
            className="foods-category"
            href="#sinner"
          >
            Dinner
          </Nav.Link>
        </Nav>
      </div>
      <Row className="foods-container">
        {categoryfoods.map((food) => (
          <Food key={food.id} cartHandler={cartHandler} food={food}></Food>
        ))}
      </Row>
      <div className="text-center mb-4">
        <Link to="/orderreview">
          <Button disabled={disabled} variant="success">
            Order review
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Foods;
