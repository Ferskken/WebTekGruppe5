
import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/productSlice";
import {sendApiRequest} from "./api/request";

export default function App() {
    const products = useSelector(state => state.productStore.products)
    const cart = useSelector(state => state.cartStore.cart)

    const dispatch = useDispatch();

    useEffect(() => {
            loadRealProducts()
    },[]);

   function setFakeProducts() {
      dispatch(setProducts(FAKE_PRODUCTS))
   };

   function loadRealProducts() {
       sendApiRequest("GET", "/api/products", function(products) {dispatch(setProducts(products));}, null, "Test import")
   };

   function loadFakeProducts() {
       dispatch(setProducts(FAKE_PRODUCTS))
   }

  return (
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
  )
}
