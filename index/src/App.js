
import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/productSlice";


export default function App() {
    const products = useSelector(state => state.productStore.products)
    const cart = useSelector(state => state.cartStore.cart)

    const dispatch = useDispatch();

    useEffect(() => {
            loadProducts();
    });

   function setFakeProducts() {
      dispatch(setProducts(FAKE_PRODUCTS))
   };

   function loadProducts() {
           setFakeProducts()

   };


  return (
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
  )
}
