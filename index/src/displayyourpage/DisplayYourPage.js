import React from "react";
import {useDispatch, useSelector} from "react-redux";
import LoginOrSignup from "./LoginOrSignup";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import {deleteAuthorizationCookies, isAdmin} from "../api/authentication";
import {unsetUser} from "../redux/userSlice";

export default function DisplayYourPage() {
    const user = useSelector(state => state.userStore.user)

    const dispatch = useDispatch();

    function doLogout() {
        dispatch(unsetUser())
        deleteAuthorizationCookies()
    }

    return (
        <>
            {!user ? <LoginOrSignup /> :
                isAdmin(user) ? <AdminPage doLogout={doLogout} /> : <UserPage doLogout={doLogout} />}
        </>
    )
}