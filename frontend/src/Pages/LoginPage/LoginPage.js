import React from "react";
import Login from "../../components/Login/Login"
import TitleBar from "../../components/TitleBar/TitleBar"
import "./LoginPage.css"

const LoginPage = () => {
    return(
        <div className="login-body">
            <TitleBar/>
            <Login />
        </div>
    );
}


export default LoginPage