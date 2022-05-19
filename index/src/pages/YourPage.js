import React from "react";
import Navbar from "../navigation/Navbar";
import LoginOrSignup from "../login/LoginOrSignup";

export default class yourPage extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <LoginOrSignup />
            </>
        )
    }
}