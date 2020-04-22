import React from 'react';
// librerias de transacc
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
//
import './App.css';
import Menu from './componentes/menu/Menu';
import Footer from './componentes/footer/Footer';
import Rutas from './rutas/Rutas';
//Inicio Impotar las paginas
//import Inicio from './componentes/vistas/inicio/Inicio';
//import Contacto from './componentes/vistas/contacto/Contacto';
//import Galeria from './componentes/vistas/galeria/Galeria';

//Fin Impotar las paginas

function App() {
  return (
    <div >
      <Menu />
       <Rutas />

      <Footer />
    </div>
  );
}

export default App;
