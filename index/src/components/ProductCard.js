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
                        <h3>{props.title}</h3>
                        <br/>
                        <p>{props.text}</p>
                        <br/>

                        <a className="links1" href={"products.html"}>Les mer!</a>

                    </div>
                </div>
            </div>
        </article>
    )
}