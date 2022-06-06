import React from "react";
import {useDispatch, useSelector} from "react-redux";


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