import React, {Component} from "react";
import "../css/inicio.css" 

class Micomponente extends Component{

render(){
    
    return (
        <React.Fragment>
        <header className="header">
        <a href="/"><li>Inicio</li></a>
        <a href="/cursos"> <li>Cursos</li></a>
        <a href="google.com"><li>Contacto</li></a>
        <a href="google.com"><li>Nosotros</li></a>

        

        </header>
 


        </React.Fragment>
    )
}

};

export default Micomponente;