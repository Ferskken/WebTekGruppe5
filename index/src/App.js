
import {useState, useEffect} from "react";
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";
import {FAKE_PRODUCTS} from "./FakeData";
import {ProductContext} from "./context/ProductContext"
import {CartContext} from "./context/CartContext";


export default function App() {
  const[products, setProducts] = useState([])
    const[cartItems, setCartItems] = useState([])

    useEffect(() => {
        loadProducts();
    },[])

   function setFakeProducts() {
      setProducts(FAKE_PRODUCTS)
   }


   function loadProducts() {
           setFakeProducts()

   }

   function addProductToCart(product) {
        setCartItems(function(prevCartItems) {
            prevCartItems.push(product)
        })
   }

   function deleteProduct() {

   }

  return (
      <ProductContext.Provider value={{products: products}}>
          <CartContext.Provider value={{cartItems: cartItems, handleDelete: deleteProduct,
                                                              handleAdd: addProductToCart}}>
              <Router>
                  <Navbar/>
                  <MainSection/>
              </Router>
              </CartContext.Provider>
      </ProductContext.Provider>

  )
}
