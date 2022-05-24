import React, {useState} from "react";
import AddToCartButton from "../shoppingCart/AddToCartButton";

export default function ProductCard(props) {

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

    function displayAddButtonForCorrectValues(){
         if(cartItemData.timeOfDay !== undefined &&
            cartItemData.language !== undefined &&
            cartItemData.groupSize !== undefined &&
            cartItemData.date !== undefined) {
             return <AddToCartButton product={cartItemData}/>
        }
    }

    function test() {
        console.log(cartItemData)
    }

    function handleCartItemChange(event) {

        const {name, value} = event.target
        setCartItemData(prevCartItemData => {
            return {
                ...prevCartItemData,
                [name]: value,
            }
        })
    }

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
                    <img className="offerPics" src={require("../pictures/" + cartItemData.id + ".jpg")} alt={"a picture"}/>
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

                            <select className="productCardDrop"
                                    name="date"
                                    value={cartItemData.date}
                                    onChange={handleCartItemChange}
                            >
                                <option value="hide">{"Velg dato"}</option>
                                <option value="1.januar">{"1.januar"}</option>
                                <option value="2.januar">{"2.januar"}</option>
                            </select>
                            <br />
                            <br />
                        </form>

                        <p>{cartItemData.duration}</p>
                        <h3>{cartItemData.price} kr</h3>
                        <br/>
                    </div>

                    {displayAddButtonForCorrectValues()}

                </div>
            </div>
        </article>
    )
}          