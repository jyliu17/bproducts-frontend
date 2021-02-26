
import React, { } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"




function ReviewCard({review}) {

    const {id, comment, rating, product_id, user_id } = review

    return (
      <div>
        <h3>{comment}</h3>
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