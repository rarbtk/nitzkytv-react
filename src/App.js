import Micomponente from "./components/Micomponente";
import Cursos from "./components/Cursos";
import React from "react";
import Inicio from "./components/Inicio";
import Registro from "./components/Registro";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Micomponente />

        <Switch>
          <Route path="/cursos">
            <Cursos />
          </Route>
          <Route  path="/Registro">
            <Registro/>
          </Route>
    <Route path="/Login">
      <Login/>

    </Route>

          <Router path="/">
            <Inicio />
          </Router>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
