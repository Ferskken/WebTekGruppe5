import React from "react";
import {useDispatch, useSelector} from "react-redux";

/**
 * A component to be displayed when a successful purchase has been made.
 * Needs to be extended to show the products ordered, and a id for the purchase.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function CheckoutPage() {

    const user = useSelector(state => state.userStore.user)

    return(
    <>

         <div className={"logInInfo"}>
             <h3 className={"logInName"}>Takk for kjøpet {user.username}</h3>
         </div>

    </>

    )

}