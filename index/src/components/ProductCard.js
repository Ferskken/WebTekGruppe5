import React from "react";

export default function ProductCard() {

    return (
        <article className="articles">
            <div className="offerColumn">
                <div className="article_image">
                    <img className="offerPics" src={require("../pictures/RKungdom.jpg")} alt={"Rkungdom"}/>
                </div>
                <div className="article_text">
                    <div className="article_intro">
                        <h3>Rødekors ungdom!</h3>
                        <br/>
                        <p>
                            Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>
                        <br/>

                        <a className="links1" href={"products.html"}>Les mer!</a>

                    </div>
                </div>
            </div>
        </article>
    )
}