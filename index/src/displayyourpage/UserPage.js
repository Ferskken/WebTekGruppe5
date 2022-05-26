import React from "react";

export default function UserPage(props) {
    return(
        <>
            <h1>User page</h1>
            <button onClick={props.doLogout}></button>
        </>
    )
}