import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import "./HeaderNav.css";
import logo from "./../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ContextApi } from "../../App";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  const { cart, calculateTotal } = useContext(ContextApi);
  // console.log(cart);
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img className="img-fluid" src={logo} alt="" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/orderreview">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              <sup>
                <Badge bg="danger">{cart.length}</Badge>
              </sup>
            </NavLink>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">
              <Button className="signup-btn" variant="danger">
                Signup
              </Button>
              <Button className="ms-3 total-btn" variant="info">
                ${calculateTotal()}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
