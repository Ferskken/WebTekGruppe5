import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoginOrSignup from "./LoginOrSignup";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import {deleteAuthorizationCookies, getAuthenticatedUser, isAdmin} from "../api/authentication";
import {unsetUser} from "../redux/userSlice";

export default function DisplayYourPage() {

    const user = useSelector(state => state.userStore.user)
    const nav = useNavigate();
    const dispatch = useDispatch();

    function doLogout() {
        dispatch(unsetUser())
        deleteAuthorizationCookies()
        nav("/")
    }

    function displayYourPage() {

        if(getAuthenticatedUser()) {
            return <LoginOrSignup />
        } else {
            displayUserOrAdminPage()
        }
    }

    function displayUserOrAdminPage() {
        if(getAuthenticatedUser().roles.includes("ROLE_ADMIN")) {
            return <AdminPage />
        } else {
            return <UserPage />
        }
    }

    return (
        <>

            {!getAuthenticatedUser() ? <LoginOrSignup /> :
                getAuthenticatedUser().roles.includes("ROLE_ADMIN") ? <AdminPage doLogout={doLogout} /> : <UserPage doLogout={doLogout} />}
        </>
    )
}