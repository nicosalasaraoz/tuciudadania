import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


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

const [classToggle, setClassToggle] = useState(false);
const dropDownToggle = ()=>{
 !classToggle? setClassToggle(true):setClassToggle(false);
}

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
                <div className="serviciosDropDown">
                  <div className="mainServicios icono-call">
                    <Link className="item-text textNav navIcons" onClick={dropDownToggle}>Servicios{classToggle?<IoIosArrowUp className="mx-1 " />:<IoIosArrowDown className="mx-1 mt-1" />}</Link>
                  </div>
                  <ul className={classToggle ? 'menuServiciosActive':'menuServicios'}>
                    <li className="menuItem">Servicio Uno</li>
                    <li className="menuItem">Servicio Dos</li>
                    <li className="menuItem">Servicio Tres</li>
                    <li className="menuItem">Servicio Cuarto</li>
                  </ul>
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
          
                <ul className="headerIcons">
                  <li className="item">
                    <Link to="/error404" className="headerIcon">
                      <FaFacebookF className="aa" />
                    </Link>
                    </li>
                    <li className="item">
                    <Link to="/error404" className="headerIcon">
                      <FaTwitter className="aa"/>
                    </Link>
                    </li>
                    <li className="item">
                    <Link to="/error404" className="headerIcon">
                      <FaInstagram className="aa" />
                    </Link>
                  </li>
                </ul>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
