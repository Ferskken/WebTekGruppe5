import React from "react";
import {useDispatch, useSelector} from "react-redux";


export default function AdminPage(props) {

    const user = useSelector(state => state.userStore.user)

    return(
        <>
            <div className={"logInInfo"}>
            <h3 className={"logInName"}>{`Hei! ${user.username}`}</h3>
            <p className={"logInText"}>logget inn som Admin</p>
                <button className={"logoutButton"} onClick={props.doLogout}>Logg ut</button>
            </div>

        </>
    )
}