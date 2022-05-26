import React from "react";
import {useSelector} from "react-redux";
import LoginOrSignup from "./LoginOrSignup";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";

export default function DisplayYourPage() {
    const user = useSelector(state => state.userStore.user)

    return (
        <>
            {!user ? <LoginOrSignup /> :
                user.roles.includes("ROLE_ADMIN") ? <AdminPage /> : <UserPage />}
        </>
    )
}