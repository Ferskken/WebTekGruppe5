import React from "react";

export default function LoginOrSignup() {
    return(
        <div className="offerRow">
            <div className="main-form">
                <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form>
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input type="text" name="txt" placeholder="User name" required=""/>
                            <input type="email" name="email" placeholder="Email" required=""/>
                            <input type="password" name="pswd" placeholder="Password" required=""/>
                            <button className="su-log-btn">Sign up</button>

                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="text" name="txt" placeholder="User name" required=""/>
                            <input type="password" name="pswd" placeholder="Password" required=""/>
                            <button className="su-log-btn">Login</button> 
                        </form>
                    </div>
            </div>
        </div>
    )
}