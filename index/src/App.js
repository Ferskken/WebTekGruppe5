
import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {ProductContext} from "./context/ProductContext"
import {CartContext} from "./context/CartContext";


export default function App() {
  const[products, setProducts] = useState([])

   function setFakeProducts() {
      setProducts(FAKE_PRODUCTS)
   }

   useEffect(() => {
       loadProducts();
   },[])

   function loadProducts() {
           setFakeProducts()

   }

  return (
      <ProductContext.Provider value={products}>
          <CartContext>
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
              </CartContext>
      </ProductContext.Provider>

  )
}
