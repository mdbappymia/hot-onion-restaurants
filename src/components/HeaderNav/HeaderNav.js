import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import "./HeaderNav.css";
import logo from "./../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useStore from "../../hooks/useStore";

const HeaderNav = () => {
  const { cart, calculateTotal, user, logOut } = useStore();

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <NavLink className="brand-image" to="/">
          <img className="img-fluid" src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">
              <Button className="ms-3 total-btn" variant="info">
                ${calculateTotal()}
              </Button>
            </Nav.Link>
            <NavLink className="nav-link" to="/orderreview">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              <sup>
                <Badge bg="danger">{cart.length}</Badge>
              </sup>
            </NavLink>
            <small>{user.displayName || user.email}</small>
            {user.displayName || user.email ? (
              <>
                <Button
                  variant="danger"
                  className="signup-btn"
                  onClick={logOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <NavLink to="/signup">
                <Button variant="primary">Signup</Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
