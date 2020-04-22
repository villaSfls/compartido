import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    NavLink
} from "react-router-dom";
import Inicio from '../componentes/vistas/inicio/Inicio';
import Galeria from '../componentes/vistas/galeria/Galeria';
import Contacto from '../componentes/vistas/contacto/Contacto';
import Menu from '../componentes/menu/Menu';
import Footer from '../componentes/footer/Footer';

class Rutas extends Component{
    constructor(props) {
        super(props);
        this.state={}
}

 render() {
     return(
 
    <div>
        <Router>
            <Menu />
            <Switch>
                <Route Path='/' exact children ={<Inicio />} />
  	             <Route Path='/galeria'  children ={<Galeria />} />
                   <Route Path='/contacto'  children ={<Contacto />} />
            </Switch>
	    	<Footer />
        </Router>     
    </div>

    );
}
}

export default Rutas;