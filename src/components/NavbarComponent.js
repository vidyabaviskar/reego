import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import './NavbarComponent.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link as={Link} to="/" onClick={handleNavCollapse}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavCollapse}>About</Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={handleNavCollapse}>Gallery</Nav.Link>
            {/* Products Dropdown */}
            <NavDropdown title="Product" id="basic-nav-dropdown" onClick={handleNavCollapse}>
              <NavDropdown.Item as={Link} to="/category/chair" onClick={handleNavCollapse}>Chair</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/table" onClick={handleNavCollapse}>Table</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/table-chair-set" onClick={handleNavCollapse}>Table and Chair Set</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/tepoys" onClick={handleNavCollapse}>Tepoys</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/stools" onClick={handleNavCollapse}>Stools</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact" onClick={handleNavCollapse}>Contact</Nav.Link>
            {/* Cart Icon */}
            <Nav.Link as={Link} to="/cart" onClick={handleNavCollapse} className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;


