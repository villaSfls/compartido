import React from 'react';
//Inicio Menu
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import menucss from './menucss.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Menu extends React.Component {

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#Inicio">Menú</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="colorcambio">Inicio </Link>
            <Link to="/galeria" className="colorcambio">Contacto </Link>
            <Link to="/contacto" className="colorcambio">Contacto </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar>
      </div>

    );

  }
}

export default Menu;
