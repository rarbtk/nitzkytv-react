import React, { Component } from "react";
import "../css/login.css"

class Login extends Component {
    render (){
        return(
            <React.Fragment>

    <div class="login-box">
      
      <h1>RESGISTRATE</h1>
      <form>
       
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username"/>
    
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password"/>
        <input type="submit" value="Log In"/>
        <a href="#">Lost your Password?</a><br/>
        <a href="#">Don't have An account?</a>
      </form>
        </div>


            </React.Fragment>
        )
    }
} 

export default Login;