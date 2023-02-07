import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cartwidget from '../Cart/CartWidget';



export default function NavBar() {

  const menuData = [
    {
      path: '/categoria/botines',
      name: "Botines"
    },
    {
      path: '/categoria/zapatillas',
      name: "Zapatillas"
    },
    {
      path: '/contacto',
      name: "Contacto"
    }
  ]

  {
    return (
      <Navbar expand="lg">
        <Container>
          <img src='/logo_size.jpg' alt="Altas Zapas" style={{ width: '90px', marginRight: '30px' }} />
          <NavLink to={'/'} className='brand'> Altas Zapas </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                menuData.map((item) => (
                  <NavLink to={item.path} key={item.name}>
                    <span className="list_item">{item.name}</span>
                  </NavLink>
                ))
              }
            </Nav>
            <NavLink to={'/cart'}  className="ms-auto">
              <Cartwidget/>
            </NavLink>
            <Nav>
              <button className="btn btn-dark">Sign Up</button>
            </Nav>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  }
}
