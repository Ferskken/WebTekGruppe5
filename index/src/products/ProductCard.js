import React, {useState} from "react";
import AddToCartButton from "../shoppingCart/AddToCartButton";
import {useSelector} from "react-redux";
import ProductReview from "./ProductReview";
import ReviewSection from "./ReviewSection";

export default function ProductCard(props) {

    // State to store the current data of the product
    const [cartItemData, setCartItemData] = useState({
        id: props.product.id,
        title: props.product.title,
        description: props.product.description,
        duration: props.product.duration,
        price: props.product.price,
        timeOfDay: undefined,
        language: undefined,
        groupSize: undefined,
        date: undefined
    })

    // Only display add to cart button if all selects are selected
    function displayAddButtonForCorrectValues(){
         if(cartItemData.timeOfDay !== undefined &&
            cartItemData.language !== undefined &&
            cartItemData.groupSize !== undefined &&
            cartItemData.date !== undefined) {
             return <AddToCartButton product={cartItemData}/>
        }
    }

    //Updates the cart when the form changes
    function handleCartItemChange(event) {
        const {name, value} = event.target
        setCartItemData(prevCartItemData => {
            return {
                ...prevCartItemData,
                [name]: value,
            }
        })
    }

    //Displays the correct price depending on the group size
    function handlePrice() {

        if(cartItemData.groupSize === "5" && cartItemData.title === "Two day course") {
            setCartItemData(prevCartItemData => {
                return {
                    ...prevCartItemData,
                    price: 35000
                }
            })
        }

        if(cartItemData.groupSize === "1" && cartItemData.title === "Two day course") {
            setCartItemData(prevCartItemData => {
                return {
                    ...prevCartItemData,
                    price: 8000
                }
            })
        }

        if(cartItemData.groupSize === "5" && cartItemData.title === "One day course") {
            setCartItemData(prevCartItemData => {
                return {
                    ...prevCartItemData,
                    price: 20000
                }
            })
        }

        if(cartItemData.groupSize === "1" && cartItemData.title === "One day course") {
            setCartItemData(prevCartItemData => {
                return {
                    ...prevCartItemData,
                    price: 5000
                }
            })
        }
    }

    return (

        <article className="articles">
            <div className="offerColumn">
                <div className="article_image">
                    <img className="offerPics" src={require("../pictures/" + cartItemData.id + ".jpg")} alt={"productpicture"}/>
                </div>
                <div className="article_text">
                    <div className="article_intro">
                        <h1>{cartItemData.title}</h1>
                        <br/>
                        <p>{cartItemData.description}</p>
                        <br/>
                        <p>{"Vennligst kryss av under:"}</p>
                        <form>
                            <select id="timeOfDay"
                                    className="productCardDrop"
                                    name="timeOfDay"
                                    value={cartItemData.timeOfDay}
                                    onChange={handleCartItemChange}
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
                                    onChange={handleCartItemChange}
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
                                    onChange={handleCartItemChange}
                                    onClick={handlePrice}
                            >
                                <option value="hide">{"Antall deltagere"}</option>
                                <option value="1">{"1 (Alene)"}</option>
                                <option value="5">{"5 (Gruppe)"}</option>
                            </select>
                            <br />
                            <br />

                            <input
                                className="calendar"
                                type={"date"}
                                name={"date"}
                                onChange={handleCartItemChange}
                                value={cartItemData.date}
                                    />
                            <br />
                            <br />
                        </form>

                        <p>{cartItemData.duration}</p>
                        <h3 id="productPrice">{cartItemData.price} kr {displayAddButtonForCorrectValues()}</h3>
                    </div>

                </div>

            </div>

            <ReviewSection
                productId={props.product.id}
            />

        </article>
    )
}          