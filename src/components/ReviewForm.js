
import React, {useState} from 'react'

function ReviewForm({currentUser, product, addReview}){

    const [review, setReview] = useState("")
    // const [anonymous, setAnonymous] = useState(false)
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")

 console.log(review)

    function handleSubmit(e){
        e.preventDefault()

        const newReview = {
            user_id: currentUser.id,
            product_id: product.id,
            comment: comment,
            rating: rating,
           
        }
        
        fetch(`http://localhost:3000/reviews`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        })
            .then(res=>res.json())
            .then(reviewObj=>{
                addReview(reviewObj)
            })
        
        // setReview("")
        // setAnonymous(false)
    }

    return (
        <div>
        <form className="review-form" onSubmit={handleSubmit}>
            <label htmlFor="new-review">Leave a Review</label>
            <br/>
            <h4>Comment</h4>
            <textarea className="comment-area" type="text" name="comment" row="7" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <h4>Rating</h4>
            <input type="number" name="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
    
            <div className="comment-form-bottom">
                {/* <label htmlFor="anonymous">Post Anonymously?</label>
                <input type="checkbox" name="anonymous" value={anonymous} onChange={(e)=>setAnonymous(e.target.checked)} /> */}
                <button type="submit">Create Comment</button>
            </div>
            </form>
        </div>
    )
}

export default ReviewForm