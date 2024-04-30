import { Container, NavDropdown, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const NavbarMain = ({
  usuarioLogueado,
  setUsuarioLogueado,
  searchState,
  setSearchState,
  setCategory,
}) => {
  const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado");
    setUsuarioLogueado();
  };

  return (
    <>
      <Navbar bg="dark" expand="md" className="bg-navbar">
        <Container className="icon-tog">
          <img
            src={require("../views/images/logo.jpg")}
            className="centrar-logo mx-2 my-4 m-4"
            height="70"
            alt="logo"
          />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarMobile">
            <div className="d-flex justify-content-center">
              <div className="icono-call text-dark mb-1 mx-2">
                <Link to="/" className="navIcons">
                  <span className="textNav">Inicio</span>
                </Link>
              </div>
              <div className="icono-call mb-1 mx-2">
                <Link to="/PaginaContacto" className="navIcons">
                  <span className="textNav">Contacto</span>
                </Link>
             </div>
              <div className="icono-call mb-1 mx-2">
                
                  <NavDropdown
                    className="textNav icono-call mb-1 mx-2"
                    title="Servicios"

                  >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

            </div>
            </div>
            <Form className="ocultar-buscador">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2 "
                aria-label="Search"
                size="sm"
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              />
              {searchState ? (
                <Link to="/search" className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              ) : (
                <Link className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              )}
            </Form>
            <Nav className="icono-call">
              <div className="navIconsContainer">
                {usuarioLogueado ? (
                  <>
                    <NavLink
                      to="/"
                      onClick={cerrarSesion}
                      className={"navIcons"}
                    >
                      <span className="textNav">Logout</span>
                    </NavLink>
                  </>
                ) : (
                  <>
                    {usuarioLogueado && usuarioLogueado.rol === "admin" ? (
                      <>
                        <NavLink to="/administrar" className={"navIcons"}>
                          <span className="textNav">Administrar</span>
                        </NavLink>
                        <NavLink
                          to="/"
                          onClick={cerrarSesion}
                          className={"navIcons"}
                        >
                          
                          <span className="textNav">Logout</span>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/usuario/login" className={"navIcons"}>
                          
                          <span className="textNav">Login</span>
                        </NavLink>
                        <NavLink to="/usuario/registro" className={"navIcons"}>
                          <span className="textNav">Registrarse</span>
                        </NavLink>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="d-flex ">
                <ul className="SocialHeader">
                  <li>
                    <Link to="/error404" className="">
                      <FaFacebookF />
                    </Link>
                    <Link to="/error404" className="">
                      <FaTwitter />
                    </Link>
                    <Link to="/error404" className="">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sec-nav">
                <hr className="text-white" />
                <h3 className="text-white fs-5">SECCIONES</h3>
                <Container className="d-flex justify-content-end flex-column">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Deporte")}
                  >
                    Deportes
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Economia")}
                  >
                    Economia
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Mundo")}
                  >
                    Mundo
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Espectaculos")}
                  >
                    Espectaculos
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Politica")}
                  >
                    Politica
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Opinion")}
                  >
                    Opinion
                  </Link>
                </Container>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
