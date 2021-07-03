import Micomponente  from './components/Micomponente';
import Cursos from './components/Cursos';
import React from "react";
import Inicio from "./components/Inicio";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
return (
<Router>
<div>
<Micomponente/>


  <Switch>
    <Route path="/cursos">

    <Cursos/>
    

    </Route>
    <Router path="/">
    <Inicio/>

    </Router>
  </Switch>

</div>
    </Router>
  );
}




export default App;
