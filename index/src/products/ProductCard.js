import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import AddToCartButton from "../shoppingCart/AddToCartButton";

export default function ProductCard(props) {

const [cartItemData, setCartItemData] = useState({
    id: props.product.id,
    alt: props.product.alt,
    title: props.product.title,
    description: props.product.description,
    duration: props.product.duration,
    price: props.product.price,
    timeOfDay:null,
    language:null,
    groupSize: null,
    date:null
})

    function displayAddButtonForCorrectValues(){
         if(cartItemData.timeOfDay !== null &&
            cartItemData.language !== null &&
            cartItemData.groupSize !== null &&
            cartItemData.date !== null) {
             return <AddToCartButton product={cartItemData}/>
        }
    }

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
                                    value={cartItemData.timeOfDay}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Tid på dagen"}</option>
                                <option value="10:00 - 14:00">{"10:00 - 14:00"}</option>
                                <option value="17:00 - 21:00">{"17:00 - 21:00"}</option>
                            </select>
                            <br />
                            <br />

                            <select className="productCardDrop"
                                    name="language"
                                    value={cartItemData.language}
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
                                    value={cartItemData.groupSize}
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
                                    value={cartItemData.date}
                                    onChange={handleChangeCartItemChange}
                            >
                                <option value="hide">{"Velg dato"}</option>
                                <option value="1.januar">{"1.januar"}</option>
                                <option value="2.januar">{"2.januar"}</option>
                            </select>
                            <br />
                            <br />
                        </form>

                        <p>{props.product.duration}</p>
                        <h3>{props.product.price} kr</h3>
                        <br/>
                    </div>

                    {displayAddButtonForCorrectValues()}

                </div>
            </div>
        </article>
    )
}          