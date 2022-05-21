import React, {useContext} from "react"
import ProductCard from "./ProductCard";
import Review from "../reviews/Review";
import {ProductContext} from "../context/ProductContext"

export default function ProductSection() {
    const products = useContext(ProductContext)


    const productElements = products.map(product => (
            <ProductCard

                //Could pass the entire object
                //product={product}

                id={product.id}
                alt={product.alt}
                title={product.title}
                text={product.description}
                duration={product.duration}
                price={product.price}
            />
        )
    )

    return (

        <div className="offerRow">
            {productElements}
{/*            <ProductCard img={require("../pictures/2.jpg")}
                         alt="Hund som ser glad ut"
                         title="To dagers kurs!"
                         text="Perfekt for nye medlemmer som ikke har tidligere kursing"
                         duration="4 timer x 2"
                         price="Pris: 8000 NOK"

            />
            <ProductCard img={require("../pictures/1.jpg")}
                         alt="Mann som snakker med annen mann"
                         title="Dags kurs!"
                         text="For de som trenger en oppfrisking i kunnskap eller har hatt kursing med oss de siste tre årene"
                         duration="6 timer"
                         price="Pris: 5000 NOK"

            />
            <ProductCard img={require("../pictures/3.jpg")}
                         alt="Glad ungdom i røde kors"
                         title="Kort konsultasjon!"
                         text="Har du noe spesielt å ta opp med eller ønsker du bare noen å snakke med?"
                         duration="60 minutter"
                         price="Pris: 1600 NOK"
            />*/}

        </div>
    )
}