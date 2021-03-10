import React, { useState } from 'react'


// import { Link } from "react-router-dom";
// import styled from "styled-components"


function ReviewCard({review, currentUser, handleDeleteReview, handleUpdateReview}) {

  const [showForm, setShowForm] = useState(false)
  const { id, comment, rating,  user } = review

// console.log(currentUser.id)
console.log(review.user)
console.log(review.user.id)
  function UpdateReviewForm() {
    const [newComment, setNewComment] = useState(review.comment)
    const [newRating, setNewRating] = useState(review.rating)
    

    
    function handleSubmit(e) {
        e.preventDefault()

        fetch(`${process.env.REACT_APP_RAILS_URL}/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"comment": newComment,
                                  "rating": newRating   })
        })
            .then(res=>res.json())
            .then(updatedRev=> {
                handleUpdateReview(updatedRev)
            })
        setShowForm(false)
    }

    return(
      <div className="update-review-form">
        <form className="review-form" onSubmit={handleSubmit}> 
          <label htmlFor="new-review">Update Your Review</label>
            <br/>
            <h4>Comment</h4>
            <textarea type="text" name="comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)} />
            <h4>Rating</h4>
            <input type="number" name="rating" value={newRating} onChange={(e)=>setNewRating(e.target.value)} />
              <button type="submit">Update</button>   
        </form>
      </div>
    )
}


  function handleDelete() {
    fetch(`${process.env.REACT_APP_RAILS_URL}/reviews/${id}`, {
      method: "DELETE"
    })
    handleDeleteReview(id)
  }

 
  

    return (
      <div>
        <h4 className="timestamp">{comment}</h4><p> -{user.username}</p> 
        <p> Rating: {rating}</p>
       

        {rating === 1 ? "⭐️" : null}
        {rating === 2 ? "⭐️⭐️" : null}
        {rating === 3 ? "⭐️⭐️⭐️" : null}
        {rating === 4 ? "⭐️⭐️⭐️⭐️" : null}
        {rating === 5 ? "⭐️⭐️⭐️⭐️⭐️" : null}
        <br></br><br></br>
        
        {currentUser && review.user.id === currentUser.id ? 
                <div >
                    {showForm ? <UpdateReviewForm />: null}
                    <button onClick={()=>setShowForm(state=>!state)}>{showForm ? "Nevermind" : "Update Review"}</button> 
                    <button onClick={handleDelete}>Delete Comment</button> 
                </div> : null}
        {/* {review.user.id === currentUser.id ? <button onClick={handleFormClick}>Edit Review</button> : null} */}
        {/* {review.user.id === currentUser.id ? <button onClick={handleDelete}>Delete Review</button> : null} */}
        
        </div>
    )   
}

export default ReviewCard