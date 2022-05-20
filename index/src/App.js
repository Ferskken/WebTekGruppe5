
import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";

export default function App() {
  const[products, setProducts] = useState([])

   function setFakeProducts() {
      setProducts(FAKE_PRODUCTS)
   }

   function loadProducts() {
      products.length === 0
          ? setFakeProducts()
          : console.log("loadProducts() called, but we don't fetch the data again")
   }

  return (
      <Router>
        <Navbar/>
        <MainSection/>
      </Router>

  )
}
