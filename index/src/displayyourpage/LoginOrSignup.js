import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {sendApiRequest} from "../api/request";
import {useDispatch, useSelector} from "react-redux";
import {sendAuthenticationRequest} from "../api/authentication";
import {setUser} from "../redux/userSlice";

export default function LoginOrSignup() {

    const user = useSelector(state => state.userStore.user)

    const dispatch = useDispatch();

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
        if(signUpFormData.password === signUpFormData.confirmPassword) {
            const signUpData = {
                "username": signUpFormData.username,
                "email": signUpFormData.email,
                "password": signUpFormData.password
            };
            console.log(signUpFormData)
            sendApiRequest("POST", "/api/signup", onSignupSuccess, signUpData, errorMessage => setError(errorMessage))
        }
        else {
            console.log("password " + signUpFormData.password +
                " and " + signUpFormData.confirmPassword + " do not match")
        }
     }

     function handleLoginSubmit(event) {
        event.preventDefault()
         sendAuthenticationRequest(loginFormData.username, loginFormData.password,
             onLoginSuccess,
                 errorMessage => setError(errorMessage))
     }

     function onLoginSuccess(userData) {
        dispatch(setUser(userData))
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
                        <form onSubmit={handleLoginSubmit}>
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
            </div>

        </div>

    )
}