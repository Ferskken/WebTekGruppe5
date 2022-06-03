import React from "react";
import {useSelector} from "react-redux";


export default function UserPage(props) {

    const user = useSelector(state => state.userStore.user)

    return(
        <>
              <div className={"logInInfo"}>
                        <h3 className={"logInName"}>{`Hei! ${user.username}`}</h3>
                        <p className={"logInText"}>logget inn som Bruker</p>
                            <button className={"logoutButton"} onClick={props.doLogout}>Logg ut</button>
                        </div>
        </>
    )
}