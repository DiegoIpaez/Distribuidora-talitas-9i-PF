import React from "react";
import NavLogo from "../assets/img/NavLogo.png";
// import { useLocalStorage } from "../helpers/localStorageCart";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
} from "react-bootstrap";
import BtnCategorias from "./BtnCategorias";
import BarraBusqueda from "./BarraBusqueda";

const NavBar = () => {
  // Estado del carrito
  // const [cart, setCart] = useLocalStorage("carrito", []);

  // let contadorCart = cart.length
  // {contadorCart ?( <span>{contadorCart}</span>) :("")}

  //---------------------------

  // Login
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  // -----------------------------

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
              <BarraBusqueda />
              {/* <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Buscar..."
                  className="mr-2"
                  aria-label="Buscar"
                />
                <button className="btn btn-buscar-nav ms-1" type="submit">
                  <i className="fab fa-sistrix"></i>
                </button>
              </Form> */}
            </Nav.Link>
            <Nav.Link>
              <div className="pe-1"></div>
            </Nav.Link>
            <Nav.Link>
              <div className="pe-1"></div>
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
                <Dropdown.Item onClick={logout}>
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
