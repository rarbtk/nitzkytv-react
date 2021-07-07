import React, {Component} from "react";
import "../css/header.css" 

class Micomponente extends Component{

render(){
    
    return (
        <React.Fragment>
        <header className="header">
        <a href="/"><li>Inicio</li></a>
        <a href="/cursos"> <li>Cursos</li></a>
        <a href="/Registro"><li>Registro</li></a>
        <a href="/Login"><li>Ingresa</li></a>

        

        </header>
 


        </React.Fragment>
    )
}

};

export default Micomponente;