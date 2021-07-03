import React, { Component } from "react";
import "../css/cursos.css";
import cursos from "../database/cursos";

class Cursos extends Component {
  render() {
    return (
      <React.Fragment>
          
       

    {
    cursos.map(x =>{
            return <div className="container">
            <img src={x.imagen}  alt=""/>
            <div className="textos">
              <h1>{x.nombre}</h1>
              <p>{x.descripcion}</p>
              <div className="botones">
              <button>Comprar</button>
              <button className="margin-left">Regalar</button>
              </div>
              
            </div>
            
          </div>
        })
    }

        
      </React.Fragment>
    );
  }
}

export default Cursos;
