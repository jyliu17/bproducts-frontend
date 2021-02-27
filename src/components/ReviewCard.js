
import React, { } from 'react'
// import { Link } from "react-router-dom";
// import styled from "styled-components"




function ReviewCard({review, currentUser}) {

    
    const { comment, rating,  user } = review

    return (
      <div>
        <h3>{comment}</h3><p> -{user.username}</p>
        <p> Rating: {rating}</p>
        
        {rating === 1 ? "⭐️" : null}
        {rating === 2 ? "⭐️⭐️" : null}
        {rating === 3 ? "⭐️⭐️⭐️" : null}
        {rating === 4 ? "⭐️⭐️⭐️⭐️" : null}
        {rating === 5 ? "⭐️⭐️⭐️⭐️⭐️" : null}
      
        </div>
    )   
}

export default ReviewCard