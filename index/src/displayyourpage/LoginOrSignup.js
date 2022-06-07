import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {sendApiRequest} from "../api/request";
import {useDispatch, useSelector} from "react-redux";
import {sendAuthenticationRequest} from "../api/authentication";
import {setUser} from "../redux/userSlice";

/**
 * Component for displaying a login or signup form,
 * which can authenticate existing users and sign up new users.
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginOrSignup() {

    const nav = useNavigate();
    const dispatch = useDispatch();

    /**
     * State for remembering the user input in the signup form.
     */
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    /**
     * State for remembering the user input in the login form.
     */
    const [loginFormData, setLoginFormData] = useState({
        username:"",
        password:""
    })

    /**
     * State for receiving error messages from API calls.
     */
    const [error, setError] = useState("");

    /**
     * Tracks the signup form.
     * When a user types in the signup form, the signup form state is updated
     * by spreading in the previous state and adding the newly typed letter
     * to the new state.
     * @param event when the user types.
     */
    function handleChangeSignUp(event) {
        const {name, value} = event.target
        setSignUpFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    /**
     * Tracks the login form.
     * When a user types in the login form, the login form state is updated
     * by spreading in the previous state and adding the newly typed letter
     * to the new state.
     * @param event when the user types.
     */
    function handleChangeLogin(event) {
        const {name, value} = event.target
        setLoginFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    /**
     * Sends a request to the api to signup a new user.
     * It uses the signUpFormData state, collects the values and uses it
     * in an api request.
     *
     * @param event to prevent the values from resetting
     */
    function handleSignUpSubmit(event) {
        event.preventDefault();
        if(signUpFormData.password === signUpFormData.confirmPassword) {
            const signUpData = {
                "username": signUpFormData.username,
                "email": signUpFormData.email,
                "password": signUpFormData.password
            };
            sendApiRequest("POST", "/api/signup", onSignupSuccess, signUpData, errorMessage => setError(errorMessage))
        }
        else {
            console.log("password " + signUpFormData.password +
                " and " + signUpFormData.confirmPassword + " do not match")
        }
     }

    /**
     * 
     *
     * @param event
     */
    function handleLoginSubmit(event) {
        event.preventDefault()
         sendAuthenticationRequest(loginFormData.username, loginFormData.password,
             onLoginSuccess,
                 errorMessage => setError(errorMessage))
     }

    /**
     *
     * @param userData
     */
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