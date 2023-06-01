import "./Reviews.css"
function Review({ name, content, time }) {
    return (
        <div className="one_review">
            <div className="review_content">{content}</div>
            <div className="review_info">
                <div className="review_name">{name}</div>
                <div className="review_time">{time}</div>
            </div>
        </div>
    );
}

export default Review;