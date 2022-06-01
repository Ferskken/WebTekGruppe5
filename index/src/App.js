import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/productSlice";
import {sendApiRequest} from "./api/request";
import {deleteAuthorizationCookies, getAuthenticatedUser} from "./api/authentication";
import {getCookie} from "./api/cookies";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {

            loadRealProducts()
    },[]);

   function loadRealProducts() {
       sendApiRequest("GET", "/api/products", function(products) {dispatch(setProducts(products));})
   };

    function setFakeProducts() {
        dispatch(setProducts(FAKE_PRODUCTS))
    };

  return (
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
  )
}
