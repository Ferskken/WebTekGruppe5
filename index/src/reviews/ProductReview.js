import React from "react"
import profilePicture from "../pictures/default-avatar.png"
import trashCan from "../pictures/trashcan.png"
import {useSelector} from "react-redux";
import {isAdmin} from "../api/authentication";

export default function ProductReview(props) {

    const user = useSelector(state => state.userStore.user)

    return (

        <>
                <div className="prodCommentBox">

                    <div className="prodCommentText">
                        <div className={"prodCommentTitle"}>
                            <span className="text1">{props.review.reviewText}</span>
                            {isAdmin(user) && <img className={"trashcan--logo"} src={trashCan}
                                  onClick={() => props.deleteReviewByID(props.review.id)}
                                    alt={"Delete button to delete review"}/>}
                        </div>
                        <div className="commentInfo">
                            <div className="commentProfile">
                                <img className="profilePicture" src={profilePicture} alt="randomProfilePic"/>
                                <span className="text2">{props.review.reviewUserName}</span>
                                <div className="prodRating">{props.review.rating} / 5</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>


    )
}