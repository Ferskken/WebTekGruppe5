import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {RemoveFromCartButton, DELETE_ALL} from "./RemoveFromCartButton"

export default function ShoppingCart() {

	const cart = useSelector(state => state.cartStore.cart)

	let cartItems = [];
	let totalPrice = 0;
	for (let itemId in cart) {
		const item = cart[itemId];
		const price = item.product.price * item.count;
		totalPrice += price;
		const itemRow =
			<>
				<div className="Cart-Items">

					<div className="about">
						<h1 className="title">{item.product.title}</h1>
					</div>
					<div className="counter">
						<div className="count">{item.count}</div>
					</div>
					<div className="prices">
						<div className="amount">{item.product.price} kr</div>
					</div>

				</div>
				<ul className="Cart-options">
					<li>tid på dagen: {item.product.timeOfDay}</li>
					<li>Språk: {item.product.language}</li>
					<li>Gruppestørrelse: {item.product.groupSize} pers</li>
					<li>Dato: {item.product.date}</li>
				</ul>
				<hr/>
			</>

		cartItems.push(itemRow);
	}


	return (
            <div className="cartContainer">

                <div className="Header">
                   	<h3 className="Heading">Handlekurv</h3>
                   	<h5 className="Action">Fjern</h5>

                </div>

				{cartItems}

            {/*    <div className="Cart-Items">*/}

            {/*       	   	  <div className="about">*/}
            {/*       	   	  	<h1 className="title">2 dagers kurs</h1>*/}
            {/*       	   	  </div>*/}
            {/*       	   	  <div className="counter">*/}
            {/*       	   	  	<div className="btn">+</div>*/}
            {/*       	   	  	<div className="count">1</div>*/}
            {/*       	   	  	<div className="btn">-</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   	  <div className="prices">*/}
            {/*       	   	  	<div className="amount">8000 NOK</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   </div>*/}

            {/*<hr/>*/}

            {/*    <div className="Cart-Items">*/}

            {/*       	   	  <div className="about">*/}
            {/*       	   	  	<h1 className="title">1 dagers kurs</h1>*/}

            {/*       	   	  </div>*/}
            {/*       	   	  <div className="counter">*/}
            {/*       	   	  	<div className="btn">+</div>*/}
            {/*       	   	  	<div className="count">0</div>*/}
            {/*       	   	  	<div className="btn">-</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   	  <div className="prices">*/}
            {/*       	   	  	<div className="amount">5000 NOK</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   </div>*/}

            {/*  <hr/>*/}

            {/*    <div className="Cart-Items">*/}

            {/*       	   	  <div className="about">*/}
            {/*       	   	  	<h1 className="title">Konsultasjon</h1>*/}

            {/*       	   	  </div>*/}
            {/*       	   	  <div className="counter">*/}
            {/*       	   	  	<div className="btn">+</div>*/}
            {/*       	   	  	<div className="count">0</div>*/}
            {/*       	   	  	<div className="btn">-</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   	  <div className="prices">*/}
            {/*       	   	  	<div className="amount">1600 NOK</div>*/}
            {/*       	   	  </div>*/}
            {/*       	   </div>*/}

            	 <div className="checkout">
            	 <div className="total">
            	 	<div>
            	 		<div className="Subtotal">Total-pris: </div>
            	 		<div className="items">1 produkt</div>
            	 	</div>
            	 	<div className="total-amount">{totalPrice} NOK</div>
            	 </div>
            	 <button className="button">Sjekk ut</button></div>
            </div>
        )
}