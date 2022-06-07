import {useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/productSlice";
import {sendApiRequest} from "./api/request";
import {deleteAuthorizationCookies, getAuthenticatedUser, isAdmin, parseJwtUser} from "./api/authentication";
import {getCookie} from "./api/cookies";
import {setUser} from "./redux/userSlice";


export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
            restoreUserAtRefreshIfLoggedIn()
            loadProducts()
    },[]);


    /**
     * sends request to backend endpoint where product recourses are listed and displays the given data.
     */
    function loadProducts() {
       sendApiRequest("GET", "/api/product/getAll", function(products)
                                                            {dispatch(setProducts(products));})
   };


    /**
     * Remember the local cookie in browser containing login information on page refresh.
     */
    function restoreUserAtRefreshIfLoggedIn() {
        if(getCookie("jwt")) {
            dispatch(setUser(parseJwtUser(getCookie("jwt"))))
        }
    }

  return (
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
  )
}
