import React from "react"
import ProductCard from "./ProductCard";
import Review from "../reviews/Review";

export default function ProductSection() {
    return (
        <div className="offerRow">
            <ProductCard img={require("../pictures/besoeksvenn.jpg")}
                         alt="Hund som ser glad ut"
                         title="To dagers kurs!"
                         text="Perfekt for nye medlemmer som ikke har tidligere kursing"
                         duration="4 timer x 2"
                         price="Pris: 8000 NOK"

            />
            <ProductCard img={require("../pictures/flyktningsvenn.jpg")}
                         alt="Mann som snakker med annen mann"
                         title="Dags kurs!"
                         text="For de som trenger en oppfrisking i kunnskap eller har hatt kursing med oss de siste tre årene"
                         duration="6 timer"
                         price="Pris: 5000 NOK"

            />
            <ProductCard img={require("../pictures/rkungdom.jpg")}
                         alt="Glad ungdom i røde kors"
                         title="Kort konsultasjon!"
                         text="Har du noe spesielt å ta opp med eller ønsker du bare noen å snakke med?"
                         duration="60 minutter"
                         price="Pris: 1600 NOK"
            />
        </div>
    )
}