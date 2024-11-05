import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendar, faHome } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'; // Asegúrate de que la ruta sea correcta


const NavBarComponent: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: '#6a0dad', color: '#ffffff' }} fixed="top" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          {' '} 
          Debuggeando ideas
        </Navbar.Brand>

        {/* Menú de Navegación */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto para alinear a la derecha */}
          <Nav.Link href="#news">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Inicio 
            </Nav.Link>
            <Nav.Link href="#news">
              <FontAwesomeIcon icon={faNewspaper} className="me-2" />
              Noticias
            </Nav.Link>
            <Nav.Link href="#upcoming">
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              Próximos Lanzamientos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
