import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProductReview from "./ProductReview";

export default function ReviewSection(props) {

    const reviews = useSelector(state => state.reviewStore.reviews)

    const [areReviewsShown, setAreReviewsShown] = useState(false)

    const [isAddReviewSectionShown, setIsAddReviewSectionShown] = useState(false)

    const reviewElements = reviews.map(review => {
        if(review.productId === props.productId){
            return  <ProductReview review={review} key={review.id}/>
        }}
    )

    function toggleShowReviews() {
        return setAreReviewsShown(!areReviewsShown)
    }

    function toggleShowAddReviewSection() {
        return setIsAddReviewSectionShown(!isAddReviewSectionShown)
    }


    return (
        <>
            <div className="reviewButtons">
                <button id="readCourseReviewBtn" onClick={toggleShowReviews}>Les kommentarer</button>
                <button id="addCourseReviewBtn" onClick={toggleShowAddReviewSection}>Legg til kommentar</button>
            </div>

            {areReviewsShown && <div id="prodCommentSection">{reviewElements}</div>}

            {isAddReviewSectionShown &&
                <div id="addProdComment">
                    <p>Skriv en tilbakemelding til oss!</p>
                    <input className="reviewTextField" type="text"></input>
                    <select className="ratingDrop">
                        <option value="1">{"1/5"}</option>
                        <option value="2">{"2/5"}</option>
                        <option value="3">{"3/5"}</option>
                        <option value="4">{"4/5"}</option>
                        <option value="5">{"5/5"}</option>
                    </select>
                    <button id="sendCommentBtn">Send inn</button>
                </div>}
        </>
    )
}