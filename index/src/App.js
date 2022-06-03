import {useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/productSlice";
import {sendApiRequest} from "./api/request";
import {deleteAuthorizationCookies, getAuthenticatedUser, parseJwtUser} from "./api/authentication";
import {getCookie} from "./api/cookies";
import {setReviews} from "./redux/reviewSlice";
import {setUser} from "./redux/userSlice";

export default function App() {

    const user = useSelector(state => state.userStore.user)
    const reviews = useSelector(state => state.reviewStore.reviews)

    const dispatch = useDispatch();

    useEffect(() => {
            restoreUserAtRefreshIfLoggedIn()
            loadRealProducts()
            loadReviews()
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
