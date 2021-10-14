import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/home/Home';
import Usuarios from './components/usuarios/Usuarios';
import Pedidos from './components/pedidos/Pedidos';
import Footer from './components/footer';
import ForbidenComponent from './components/Forbiden/ForbidenComponent';
import { useAuth0 } from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/usuarios" exact>
          {isAuthenticated?<Usuarios/>:<ForbidenComponent/>}
        </Route>
        <Route path="/pedidos" exact>
          {isAuthenticated?<Pedidos/>:<ForbidenComponent/>}
        </Route>
        <Route path="/forbiden" exact>
          <ForbidenComponent/>
        </Route>
      </Switch>      
      <Footer/>
    </Router>
    
  );
}

export default App;
