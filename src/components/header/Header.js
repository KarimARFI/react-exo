import React from 'react'
import './header.css';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar.Brand>React exo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/accueil">Accueil</Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
              <Nav.Link><Link to="/apropos">A propos de nous</Link></Nav.Link>
              {/* <img src="picture/framboise.png"></img> */}
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>  )
}

export default Header