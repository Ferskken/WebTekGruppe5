import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductReview from "./ProductReview";
import {sendApiRequest} from "../api/request";

/**
 * Represents the reviewsection.
 * The user can choose to show the amount of reviews, and the section
 * to add a review(if the user is logged in)
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ReviewSection(props) {

    const user = useSelector(state => state.userStore.user)

    //State for all the reviews
    const [reviews, setReviews] = useState([])
    //State to show the existing reviews section
    const [areReviewsShown, setAreReviewsShown] = useState(false)
    //State to show the add review section
    const [isAddReviewSectionShown, setIsAddReviewSectionShown] = useState(false)
    const [error, setError] = useState("");

    const [numberOfReviews, setNumberOfReviews] = useState(loadNumberOfReviews)

    const [reviewFormData, setReviewFormData] = useState({
        productId: props.productId,
        reviewUserName: user.username,
        reviewText: "",
        rating: 0
    })

    /**
     * Reload the reviews when a state changes
     */
    useEffect(() => {
        loadReviews()
    },[])

    /**
        requests the amount of reviews for individual products.
    */
    function loadNumberOfReviews() {
        sendApiRequest("GET", "/api/review/getAllRelated/" + props.productId, function (numberOfReviews) {setNumberOfReviews(numberOfReviews)})
    }

    /**
        display all reviews for individual products
    */
    function loadReviews() {
        sendApiRequest("GET", "/api/review/getAll", function(importedReviews) {setReviews(importedReviews)})
    }


    function handleReviewChange(event) {
        const {name, value} = event.target
        setReviewFormData(prevReviewFormData => {
            return {
                ...prevReviewFormData,
                [name]: value
            }
        })
    }

    /**
     * Creates a review component for each existing review
     * @type {unknown[]}
     */
    const reviewElements = reviews.map(review => {
        if(review.productId === props.productId){
            return  <ProductReview review={review}
                                   deleteReviewByID={deleteReviewById}
                                   key={review.id}/>
        }}
    )

    //Switches the state to hide/show reviews
    function toggleShowReviews() {
        return setAreReviewsShown(!areReviewsShown)
    }

    //Switches the state to show/hide the addReview section
    function toggleShowAddReviewSection() {
        return setIsAddReviewSectionShown(!isAddReviewSectionShown)
    }

    /**
        Retrieves data from "addProdComment" and assign data from inputs to create a new review for the
        specific product id (submitReviewData).
    */
    function handleSubmitReview() {
        const submitReviewData = {
            "productId": reviewFormData.productId,
            "reviewUserName": reviewFormData.reviewUserName,
            "reviewText": reviewFormData.reviewText,
            "rating": reviewFormData.rating
        };
        sendApiRequest("POST", "/api/review/addReview", reloadReviewSection, submitReviewData, errorMessage => setError(errorMessage))
    }

    /**
        Deletes review element by id in database
    */
    function deleteReviewById(reviewId) {
        sendApiRequest("DELETE", "/api/review/delete/" + reviewId, reloadReviewSection, reviewId, errorMessage => setError(errorMessage))
    }

    function reloadReviewSection() {
        loadReviews()
        loadNumberOfReviews()
    }

    /**
        logged in user/admin press "add comment" display div "appProdComment"
        containing input element(comment) and select element(rating 1-5), onclick send comment
        button triggers handleSubmitReview() function.
    **/
    return (
        <>
            <div className="reviewButtons">
                <button id="readCourseReviewBtn" onClick={toggleShowReviews}>{`Les kommentarer (${numberOfReviews})`}</button>
                {user && <button id="addCourseReviewBtn" onClick={toggleShowAddReviewSection}>Legg til kommentar</button>}
            </div>

            {areReviewsShown && <div id="prodCommentSection">{reviewElements}</div>}

            {isAddReviewSectionShown &&
                <div id="addProdComment">
                    <p>Skriv en tilbakemelding til oss!</p>
                    <input className="reviewTextField"
                           type="text"
                           placeholder={"Skriv hva du føler om produktet her"}
                           value={reviewFormData.reviewText}
                           name={"reviewText"}
                           onChange={handleReviewChange}
                           />
                    <select className="ratingDrop"
                            value={reviewFormData.rating}
                            name={"rating"}
                            onChange={handleReviewChange}
                            >
                        <option value="0">{"Din vurdering"}</option>
                        <option value="1">{"1/5"}</option>
                        <option value="2">{"2/5"}</option>
                        <option value="3">{"3/5"}</option>
                        <option value="4">{"4/5"}</option>
                        <option value="5">{"5/5"}</option>
                    </select>
                    <button id="sendCommentBtn" onClick={handleSubmitReview}>Send inn</button>
                </div>}
        </>
    )
}