import React, { Component } from "react";
import fondo from "../imagenes/fondo.png"
import "../css/inicio.css"


class Inicio extends Component {
    render (){
        return (
<React.Fragment>

    <div className="texto">
    <img src={fondo}/>
    <h1>Somos una empresa dedicada a la capacitacion de personal</h1>
    <p>En informática, la World Wide Web (WWW) o red informática mundial1​ es un sistema que funciona a través de internet, por el cual se pueden transmitir diversos tipos de datos a través del Protocolo de Transferencia de Hipertextos o HTTP, que son los enlaces de la página web.

Sus características son: es un sistema a través del cual se gestiona información que será compartida por internet; es necesario tener conexión a internet a través de algún dispositivo que se está utilizando para poder utilizar la web, por ejemplo, Google, Mozilla, Safari, Youtube y otros navegadores web, es una herramienta de internet que nos permite acceder a un gran número de contenidos que a su vez nos direcciona a otras páginas y así sucesivamente; para su creación se emplea lenguaje informático HTML (Hypertext Markup Language), lenguaje de marcas que permite crear documentos para compartir a través de internet; emplea el sistema de Localización Uniforme de Recursos o URL, que es la dirección concreta que determina cada uno de los recursos que se encuentran en la red, es decir, es un identificador propio para cada página, documento, archivo, entre otros, que se encuentran en la web</p>

    </div>


</React.Fragment>        
)

    }
}

export default Inicio;
