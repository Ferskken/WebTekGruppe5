import React from "react";

export default function Review() {
    return(
        <div className="card">
            <div className="row">
                <h4>Legg til en kommentar:</h4>
                <div className="rating">
                    <input type="radio" name="rating" value="5" id="5" />
                    <label className="stars" htmlFor="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4" />
                    <label className="stars" htmlFor="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3" />
                    <label className="stars" htmlFor="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" />
                    <label className="stars" htmlFor="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" />
                    <label className="stars" htmlFor="1">☆</label>
                </div>
                <div className="comment-area">
                            <textarea className="form-control" placeholder="what is your view?" rows="4">
                            </textarea>
                </div>

                <div className="commentbtn">
                    <button className="cancelbtn">Avbryt</button>
                </div>

                <div className="commentbtn">
                    <button className="sendbtn">Send</button>
                </div>
            </div>
        </div>
    )
}