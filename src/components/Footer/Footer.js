/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "./../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <img className="footer-logo" src={footerLogo} alt="" />
          </Col>
          <Col lg={3}>
            <ul className="footer-list">
              <li>
                <a href="#">About our online food</a>
              </li>
              <li>
                <a href="#">Read our online blog</a>
              </li>
              <li>
                <a href="#">Sign up to deliver</a>
              </li>
              <li>
                <a href="#">Add your resturents</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul className="footer-list">
              <li>
                <a href="#">Get help</a>
              </li>
              <li>
                <a href="#">Read FAQ's</a>
              </li>
              <li>
                <a href="#">View all cities</a>
              </li>
              <li>
                <a href="#">Restaurants near me</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="d-flex mt-4 justify-content-between">
          <p>Copyright &copy; 2021 Online food</p>
          <div>
            <ul className="footer-list  footer-bottom d-flex">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Term of service</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
