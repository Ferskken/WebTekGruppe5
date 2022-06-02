import React from "react"
import {useSelector} from "react-redux";
import profilePicture from "../pictures/default-avatar.png"

export default function ProductReview(props) {

    return (

        <>
            <div>
                <div className="commentBox">

                    <div className="commentText">
                                    <span className="text1">{props.review.reviewText}</span>

                        <div className="commentInfo">

                            <div className="commentProfile">
                                <img className="profilePicture" src={profilePicture} alt="randomProfilePic"/>
                                <span className="text2">{props.review.reviewUserName}</span>
                                <div>{props.review.rating} / 5</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>


    )
}