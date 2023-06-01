import {reviews} from "../../../helpers/reviewsList";
import Review from "./Review";
import {useState} from "react";
import "./Reviews.css"

function Reviews() {
    const [startIndex, setstartIndex] = useState(0)
    function beforeclick() {
        setstartIndex(Math.max(startIndex-2,0))
    }
    function afterclick() {
        setstartIndex(Math.min(startIndex+2,reviews.length-1))
    }
    return(
        <div className="main_review">
            <h2 className="review_header">Что клиенты говорят о нас</h2>
            <div className="reviews">
                {reviews.slice(startIndex,startIndex+2).map((current_review,index) => {
                    return(
                    <Review key={index} name={current_review.name} content={current_review.content} time={current_review.time}/>
                )})

                }
            </div>
            <div className="review_buttons">
                <button className="review_before" onClick={beforeclick}>🠐</button>
                <button className="review_after" onClick={afterclick}>🠒</button>
            </div>
        </div>
    )
}
export default Reviews