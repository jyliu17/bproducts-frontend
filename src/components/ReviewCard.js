import React, { } from 'react'
// import { Link } from "react-router-dom";
// import styled from "styled-components"


function ReviewCard({review, currentUser, handleDeleteArray}) {




  const { comment, rating,  user } = review

    function handleDelete() {
      fetch(`http://localhost:3000/reviews/${review.id}`, {
        method: "DELETE"
    })
    handleDeleteArray(review.id)
}
    

    return (
      <div>
        <h3>{comment}</h3><p> -{user.username}</p>
        <p> Rating: {rating}</p>
       
        
        {rating === 1 ? "⭐️" : null}
        {rating === 2 ? "⭐️⭐️" : null}
        {rating === 3 ? "⭐️⭐️⭐️" : null}
        {rating === 4 ? "⭐️⭐️⭐️⭐️" : null}
        {rating === 5 ? "⭐️⭐️⭐️⭐️⭐️" : null}
        <br></br>
        {review.user.id === currentUser.id ? <button>Edit Review</button> : null}
        {review.user.id === currentUser.id ? <button onClick={handleDelete}>Delete Review</button> : null}
        </div>
    )   
}

export default ReviewCard