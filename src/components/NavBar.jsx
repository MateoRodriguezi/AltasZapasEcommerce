import React from 'react'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import Cartwidget from './CartWidget';



export default function NavBar() {

    const menuData = [
        {
            path:'/',
            name: "Home"
        },
        {
            path:'/about',
            name: "About"
        },
        {
            path:'/contact',
            name: "Contact"
        },
        {
            path:'/service',
            name: "Service"
        }
    ]

    {
        return (
          <Navbar expand="lg">
            <Container>
              <img src='src/assets/logo_size.jpg' alt="Altas Zapas" style={{width: '90px', marginRight: '30px'}}/>
              <Navbar.Brand href="#home" className='brand' style={{ fontFamily: 'Sans-serif, Arial', fontSize: '22px'}}>Altas Zapas</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {
                    menuData.map((item) =>(
                        <NavLink to={item.path} key={item.name}>
                            <div className="list_item">{item.name}</div>
                        </NavLink>
                    ))
                  }
                </Nav>
                <Nav className="ms-auto">
                    <Cartwidget cartCounter={3} />
                    <button className="btn btn-success">Sign Up</button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );

      }
}
