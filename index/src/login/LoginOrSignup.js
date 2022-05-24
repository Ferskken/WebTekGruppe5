import React, {useState} from "react";

export default function LoginOrSignup() {


    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const adminUser = {username:"admin", password:"123"}

    const [loginFormData, setLoginFormData] = useState({
        username:"",
        password:""
    })

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    const Login = loginFormData => {
        console.log(loginFormData);
        if (loginFormData.username === adminUser.username && loginFormData.password === adminUser.password){
        console.log("Logged in");
        setLoginFormData({
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

    function handleSubmit(event) {
        event.preventDefault();
        Login(loginFormData);
     }


    /** **/


    return(

        <div className="offerRow">


                <div id="loggedInnAs">
                     <p id="loggedInnAsText">{message} <span>{loginFormData.username}</span></p>
                     {(error !== "") ? (<div className="errorMessage">{error}</div> ) : ""}
                </div>

            <div className="main-form">

                <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form onSubmit={handleSubmit}>
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
                        <form onSubmit={handleSubmit}>
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