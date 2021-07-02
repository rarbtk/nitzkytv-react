import React, { Component } from "react";
import "../css/cursos.css";
import cursos from "../database/cursos";

class Cursos extends Component {
  render() {
    return (
      <React.Fragment>
          
        <div className="container">
          <img src={cursos[0].imagen} />
          <div className="textos">
            <h1>{cursos[0].nombre}</h1>
            <p>{cursos[0].descripcion}</p>
          </div>
        </div>
<ul>
    {
    cursos.map(x =>{
            return 
        })
    }
</ul>
        
      </React.Fragment>
    );
  }
}

export default Cursos;
