import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Ordered = () => {
  return (
    <Container>
      <img
        className="w-75 m-auto d-block my-5"
        src="https://i.giphy.com/media/yN3VZSttlG3Wpxl7mP/giphy.webp"
        alt=""
      />
      <Link to="/">
        {" "}
        <p className="text-center">Back to home</p>
      </Link>
    </Container>
  );
};

export default Ordered;
