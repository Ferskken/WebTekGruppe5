import ProductCard from "./ProductCard";
import {useSelector} from "react-redux";

export default function ProductSection() {

    const products = useSelector(state => state.productStore.products)

    // Creates a product card for each existing product
    const productElements = products.map(product => (
            <ProductCard
                product={product}

                key={product.id}
            />
        )
    )

    return (
        <div className="offerRow">
            {productElements}
        </div>
    )
}