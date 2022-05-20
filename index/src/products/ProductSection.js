import React from "react"
import ProductCard from "./ProductCard";
import Review from "../reviews/Review";

export default function ProductSection() {
    return (
        <div className="offerRow">
            <ProductCard img={require("../pictures/besoeksvenn.jpg")}
                         alt="Hund som ser glad ut"
                         title="Besøksvenn!"
                         text="Få besøk av et av våre mange kjærleike dyr"
            />
            <ProductCard img={require("../pictures/flyktningsvenn.jpg")}
                         alt="Mann som snakker med annen mann"
                         title="Flyktningsvenn!"
                         text="Snakk med noen som har annen kulturell bakgrunn"
            />
            <ProductCard img={require("../pictures/rkungdom.jpg")}
                         alt="Glad ungdom i røde kors"
                         title="Rødekors ungdom!"
                         text="Bli medlem i røde kors ungdom"
            />
        </div>
    )
}