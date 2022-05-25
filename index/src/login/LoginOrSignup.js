import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {sendApiRequest} from "../api/request";

export default function LoginOrSignup() {

    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [loginFormData, setLoginFormData] = useState({
        username:"",
        password:""
    })
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const nav = useNavigate();

    const adminUser = {username:"admin", password:"123"}

    const Login = loginFormData => {
        console.log(loginFormData);
        if (loginFormData.username === adminUser.username && loginFormData.password === adminUser.password){
        console.log("Logged in");
        setLoginFormData({
        //Change, make indirect method changing values on successful login
            username: loginFormData.username,
            password: loginFormData.password
        });
        setMessage("Logged in as: ");
        } else {
        console.log("Details do not match");
        setError("Details do not match");
        setMessage("");
        }
    }

    const Logout = () => {
        setLoginFormData({ username:"", password:"" })
        setError({ error:"" })
        nav("/");
    }


    function handleChangeSignUp(event) {
        console.log(signUpFormData)
        const {name, value} = event.target
        setSignUpFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleChangeLogin(event) {
        console.log(loginFormData)
        const {name, value} = event.target
        setLoginFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleSignUpSubmit(event) {
        event.preventDefault();
        const signUpData = {
            "username": signUpFormData.username,
            "email": signUpFormData.email,
            "password": signUpFormData.password
        };
        console.log(signUpFormData)
        sendApiRequest("POST", "/api/signup", onSignupSuccess, signUpData, errorMessage => setError(errorMessage))
     }

     function handleLoginSubmit(event) {

     }

    /**
     * This function is called when signup was successful
     */
    function onSignupSuccess() {
        nav("/");
    }

    /** **/


    return(

        <div className="offerRow">

            <div className="main-form">

                <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form onSubmit={handleSignUpSubmit}>
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>

                            <input type="text"
                                   placeholder="User name"
                                   name="username"
                                   onChange={handleChangeSignUp}
                                   value={signUpFormData.username}
                                   />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChangeSignUp}
                                value={signUpFormData.email}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChangeSignUp}
                                value={signUpFormData.password}
                            />
                            <input
                                type="password"
                                placeholder="Confirm password"
                                name="confirmPassword"
                                onChange={handleChangeSignUp}
                                value={signUpFormData.confirmPassword}
                            />
                            <button className="su-log-btn">Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={handleSignUpSubmit}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="text"
                                   placeholder="User name"
                                   name="username"
                                   onChange={handleChangeLogin}
                                   value={loginFormData.username}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChangeLogin}
                                value={loginFormData.password}
                            />
                            <button className="su-log-btn">Login</button>
                        </form>
                    </div>
            </div>
            <div className="logoutBtnBox">
            <button id="logoutBtn" onClick={Logout}>Logout</button>
            </div>

        </div>

    )
}