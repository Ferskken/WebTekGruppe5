import React from "react";
import Navbar from "../navigation/Navbar";
import LoginOrSignup from "../displayyourpage/LoginOrSignup";
import {useDispatch, useSelector} from "react-redux";
import DisplayYourPage from "../displayyourpage/DisplayYourPage";

export default class yourPage extends React.Component {

    render() {
        return(
            <>
                <DisplayYourPage />
            </>
        )
    }
}