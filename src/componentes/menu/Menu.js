import React from 'react';
//Inicio Menu
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import menucss from './menucss.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Fin  Menu
class Menu extends React.Component{
     constructor (props){
     super(props);
     this.state={
          } 
      } 

       render (){
          return(
            <div>
               <Navbar bg="primary" variant="dark">
                  <Navbar.Brand href="#Inicio">Menú</Navbar.Brand>
                  <Nav className="mr-auto">
                  <NavLink className="colorcambio"><Link to="/">Inicio</Link>es</NavLink>
                  <NavLink to="/galeria">Galeria</NavLink>
                    <NavLink  to="/Contacto">Contacto</NavLink>
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
