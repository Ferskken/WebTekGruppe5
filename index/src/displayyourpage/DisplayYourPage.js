import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoginOrSignup from "./LoginOrSignup";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import {deleteAuthorizationCookies, getAuthenticatedUser, isAdmin} from "../api/authentication";
import {unsetUser} from "../redux/userSlice";


/**
 * Displays 'Din side' according to the user being logged in, and user roles.
 * @returns {JSX.Element}
 * @constructor
 */
export default function DisplayYourPage() {

    const user = useSelector(state => state.userStore.user)
    const nav = useNavigate();
    const dispatch = useDispatch();

    /**
     * Deletes cookies, unsets the user redux state and navigates to home page.
     */
    function doLogout() {
        dispatch(unsetUser())
        deleteAuthorizationCookies()
        nav("/")
    }

    return (
        <>
            {/* Nested ternary statement.
            Checks if the user is authenticated, if not, display login page.
            If the user is authenticated, display admin page,
            if not, display user page.
             This function also sends down the logout function to child components.*/}
            {!getAuthenticatedUser() ? <LoginOrSignup /> :
                getAuthenticatedUser().roles.includes("ROLE_ADMIN") ? <AdminPage doLogout={doLogout} /> : <UserPage doLogout={doLogout} />}
        </>
    )
}