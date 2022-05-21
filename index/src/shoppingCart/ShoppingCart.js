import React from "react";

export default function ShoppingCart() {



        return (
            <div className="cartContainer">

                <div className="Header">
                   	<h3 className="Heading">Handlekurv</h3>
                   	<h5 className="Action">Fjern</h5>

                </div>

                <div className="Cart-Items">

                   	   	  <div className="about">
                   	   	  	<h1 className="title">2 dagers kurs</h1>
                   	   	  </div>
                   	   	  <div className="counter">
                   	   	  	<div className="btn">+</div>
                   	   	  	<div className="count">1</div>
                   	   	  	<div className="btn">-</div>
                   	   	  </div>
                   	   	  <div className="prices">
                   	   	  	<div className="amount">8000 NOK</div>
                   	   	  </div>
                   	   </div>

            <hr/>

                <div className="Cart-Items">

                   	   	  <div className="about">
                   	   	  	<h1 className="title">1 dagers kurs</h1>

                   	   	  </div>
                   	   	  <div className="counter">
                   	   	  	<div className="btn">+</div>
                   	   	  	<div className="count">0</div>
                   	   	  	<div className="btn">-</div>
                   	   	  </div>
                   	   	  <div className="prices">
                   	   	  	<div className="amount">5000 NOK</div>
                   	   	  </div>
                   	   </div>

              <hr/>

                <div className="Cart-Items">

                   	   	  <div className="about">
                   	   	  	<h1 className="title">Konsultasjon</h1>

                   	   	  </div>
                   	   	  <div className="counter">
                   	   	  	<div className="btn">+</div>
                   	   	  	<div className="count">0</div>
                   	   	  	<div className="btn">-</div>
                   	   	  </div>
                   	   	  <div className="prices">
                   	   	  	<div className="amount">1600 NOK</div>
                   	   	  </div>
                   	   </div>

              <hr/>
            	 <div className="checkout">
            	 <div className="total">
            	 	<div>
            	 		<div className="Subtotal">Total-pris: </div>
            	 		<div className="items">1 produkt</div>
            	 	</div>
            	 	<div className="total-amount">8000 NOK</div>
            	 </div>
            	 <button className="button">Sjekk ut</button></div>
            </div>
        )
}