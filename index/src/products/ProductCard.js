import React from "react";

export default function ProductCard(props) {

    return (
        <article className="articles">
            <div className="offerColumn">
                <div className="article_image">
                    <img className="offerPics" src={props.img} alt={props.alt}/>
                </div>
                <div className="article_text">
                    <div className="article_intro">
                        <h1>{props.title}</h1>
                        <br/>
                        <p>{props.text}</p>
                        <br/>
                        <p>{"Vennligst kryss av under:"}</p>

                           <select className="productCardDrop" name="TimeStampDrop">
                              <option value="hide">{"Tid på dagen"}</option>
                              <option value="morning">{"10:00 - 14:00"}</option>
                              <option value="evening">{"17:00 - 21:00"}</option>
                           </select>
                           <br />
                           <br />

                           <select className="productCardDrop" name="languageDrop">
                              <option value="hide">{"Språk"}</option>
                              <option value="norwegian">{"Norsk"}</option>
                              <option value="english">{"English"}</option>
                           </select>
                           <br />
                           <br />

                           <select className="productCardDrop" name="ParticipantDrop">
                              <option value="hide">{"Antall deltagere"}</option>
                              <option value="1">{"1 (Alene)"}</option>
                              <option value="5">{"5 (Gruppe)"}</option>
                           </select>
                           <br />
                           <br />

                            <select className="productCardDrop" name="dateDrop">
                              <option value="hide">{"Velg dato"}</option>
                              <option value="dato1">{"1.januar"}</option>
                              <option value="dato2">{"2.januar"}</option>
                           </select>
                           <br />
                           <br />

                        <h3>{props.duration}</h3>
                        <h3>{props.price}</h3>
                        <br/>
                    </div>

                    <button className="articleBtn" id="buyBtn"><img src={"../pictures/shopping-cart.png"} alt="shoppingcartimg" /> </button>

                </div>
            </div>
        </article>
    )
}          