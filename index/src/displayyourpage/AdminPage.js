import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {unsetUser} from "../redux/userSlice";

export default function AdminPage(props) {



    return(
        <>
            <div>
                <button className={"logoutButton"} onClick={props.doLogout}>Logg ut Admin</button>
            </div>
        </>
    )
}