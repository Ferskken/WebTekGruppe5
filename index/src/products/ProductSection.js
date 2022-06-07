import ProductCard from "./ProductCard";
import {useSelector} from "react-redux";
import ProductReview from "../reviews/ProductReview";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProductSection() {

    const products = useSelector(state => state.productStore.products)
    const reviews = useSelector(state => state.reviewStore.reviews)

    // Creates a product card for each existing product
    const productElements = products.map(product => (
            <ProductCard
                product={product}
                key={product.id}
            />
        )

    )

    // const reviewElements = reviews.map(review => (
    //     <ProductReview
    //         review={review}
    //
    //         key={review.id}
    //     />
    // ))

    return (
        <div className="offerRow">
            {productElements}
        </div>
    )
}