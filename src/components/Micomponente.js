import React, {Component} from "react";
import "../css/header.css" 

class Micomponente extends Component{

render(){
    
    return (
        <React.Fragment>
        <header className="header">
        <a href="/"><li>Inicio</li></a>
        <a href="/cursos"> <li>Cursos</li></a>
        <a href="/contacto"><li>Contacto</li></a>
        <a href="/nosotros"><li>Nosotros</li></a>

        

        </header>
 


        </React.Fragment>
    )
}

};

export default Micomponente;