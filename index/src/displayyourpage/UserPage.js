import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {unsetUser} from "../redux/userSlice";
import {getAuthenticatedUser} from "../api/authentication";
import {getCookie} from "../api/cookies";

export default function UserPage(props) {

function displayUser() {
        if(getAuthenticatedUser()) {
            return `Hei! ${getCookie("current_username")}`
        } else {
            return "Din side"
        }
    }

    return(
        <>
              <div className={"logInInfo"}>
                        <h3 className={"logInName"}>{displayUser()}</h3>
                        <p className={"logInText"}>logget inn som Bruker</p>
                            <button className={"logoutButton"} onClick={props.doLogout}>Logg ut</button>
                        </div>
        </>
    )
}