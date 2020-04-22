import React, { Component } from 'react';
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

class Rutas extends Component {


    render() {
        return (

            <div>
                <Router>
                    <Menu />
                    <Switch>
                        <Route path="/" exact children={<Inicio />} />
                        <Route path="/galeria" children={<Galeria />} />
                        <Route path="/contacto" children={<Contacto />} />
                    </Switch>
                    <Footer />
                </Router>
            </div>

        );
    }
}

export default Rutas;