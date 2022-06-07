import React from "react";
import {useSelector} from "react-redux";

/**
 * A component representing an Admin's page
 * @param props from the DisplayYourPage parent component
 * @returns {JSX.Element}
 * @constructor
 */
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