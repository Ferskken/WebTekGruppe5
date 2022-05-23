import React, {useState} from "react";

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
        event.preventDefault()
        console.log(``)
    }

    return(

        <div className="offerRow">

            <div id="loggedInnAs">
                <p id="loggedInnAsText">Hei: *****</p>
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
        </div>
    )
}