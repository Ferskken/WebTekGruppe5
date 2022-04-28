import React from "react";
import Navbar from "../components/Navbar";
import LoginOrSignup from "../components/LoginOrSignup";

export default class yourpage extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <LoginOrSignup />
            </>
        )
    }
}