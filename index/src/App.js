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
import {setReviews} from "./redux/reviewSlice";

export default function App() {

    const reviews = useSelector(state => state.reviewStore.reviews)

    const dispatch = useDispatch();

    useEffect(() => {
            loadRealProducts()
            loadReviews()
        console.log(reviews)
    },[]);

   function loadRealProducts() {
       sendApiRequest("GET", "/api/products", function(products) {dispatch(setProducts(products));})
   };

    function setFakeProducts() {
        dispatch(setProducts(FAKE_PRODUCTS))
    };


    function loadReviews() {
        sendApiRequest("GET", "/api/reviews", function(reviews) {dispatch(setReviews(reviews));})
    }

  return (
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
  )
}
