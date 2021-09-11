import React from "react";
import NavLogo from "../assets/img/NavLogo.png";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import BtnCategorias from "./BtnCategorias";

const NavBar = () => {
  const history = useHistory();
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={NavLogo} className="logo-nav" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Buscar..."
                  className="mr-2"
                  aria-label="Buscar"
                />
                <button className="btn btn-buscar-nav ms-1" type="submit">
                  <i className="fab fa-sistrix"></i>
                </button>
              </Form>
            </Nav.Link>
            <Nav.Link>
              <BtnCategorias />
            </Nav.Link>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle className="me-1" id="dropdown-basic">
                <i className="fas fa-shopping-cart  "></i>
                <span className="ps-1 ">CARRITO</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="nav-link" to="/carrito">
                    Mi carrito
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <i className="far fa-user"></i>
                <span className="ps-2">MI CUENTA</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="nav-link" to="/user">
                    Mis datos
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("crypto_app_user");
                    history.push("/login");
                  }}
                >
                  <span className="nav-link">
                    <i className="fas fa-sign-out-alt"></i> Salir
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
