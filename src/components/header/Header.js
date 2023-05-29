import {Container, Nav, Navbar} from 'react-bootstrap';
import './header.css';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar.Brand>React exo</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to="/accueil">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/apropos">A propos de nous</Nav.Link>
              <img src="picture/framboise.png" alt="framboise"></img>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header