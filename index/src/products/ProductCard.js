import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import AddToCartButton from "../shoppingCart/AddToCartButton";

export default function ProductCard(props) {

const cartContext = useContext(CartContext)
const cartItems = cartContext.cartItems

const [cartItemData, setCartItemData] = useState([props.product])

function test() {
        console.log(cartItemData)
    }

    function handleChangeCartItemChange(event) {
        console.log(event)
        const {name, value} = event.target

        setCartItemData(prevCartItemData => {
            return {
                ...prevCartItemData,
                [name]: value
            }
        })
    }

   function handleSubmitToCart(){

   }

    return (
        <article className="articles">
            <div className="offerColumn">
                <div className="article_image">
                    <img className="offerPics" src={require("../pictures/" + props.product.id + ".jpg")} alt={props.product.alt}/>
                </div>
                <div className="article_text">
                    <div className="article_intro">
                        <h1>{props.product.title}</h1>
                        <br/>
                        <p>{props.product.text}</p>
                        <br/>
                        <p>{"Vennligst kryss av under:"}</p>
                        <form>
                            <select id="timeOfDay"
                                    className="productCardDrop"
                                    name="timeOfDay"
                                    value={props.product.timeOfDay}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Tid på dagen"}</option>
                                <option value="morning">{"10:00 - 14:00"}</option>
                                <option value="evening">{"17:00 - 21:00"}</option>
                            </select>
                            <br />
                            <br />

                            <select className="productCardDrop"
                                    name="language"
                                    value={props.product.language}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Språk"}</option>
                                <option value="norwegian">{"Norsk"}</option>
                                <option value="english">{"English"}</option>
                            </select>
                            <br />
                            <br />

                            <select className="productCardDrop"
                                    name="groupSize"
                                    value={props.product.groupSize}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Antall deltagere"}</option>
                                <option value="1">{"1 (Alene)"}</option>
                                <option value="5">{"5 (Gruppe)"}</option>
                            </select>
                            <br />
                            <br />

                            <select className="productCardDrop"
                                    name="date"
                                    value={props.product.data}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Velg dato"}</option>
                                <option value="dato1">{"1.januar"}</option>
                                <option value="dato2">{"2.januar"}</option>
                            </select>
                            <br />
                            <br />
                        </form>

                        <p>{props.product.duration}</p>
                        <h3>{props.product.price} kr</h3>
                        <br/>
                    </div>

                <button className="articleBtn" id="buyBtn" onClick={test}> Legg til kurs </button>

                </div>
            </div>
        </article>
    )
}          