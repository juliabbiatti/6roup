import { Link } from "react-router-dom"
 import React from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/Logo 6roup.jpeg"
 
 function Header() {
   return (
     <Navbar expand="lg">
       <Container>
         <Navbar.Brand href="#home">
         <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            />



         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
            <Link to="/" ><Nav.Link href="#home">Inicio</Nav.Link></Link>
             <Link to= "/shop"> <Nav.Link href="#link">Tienda</Nav.Link></Link>
             <Link to= "/contact"> <Nav.Link href="#link">Contacto</Nav.Link></Link>
             <NavDropdown title="Otros" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                 Seccion 1
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Seccion 2</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                 Algun link?
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   );
 }
 

export default Header;

