import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"


// import styled from "styled-components"

function ProductPage({reviews, currentUser}) {

    const { id } = useParams();
    const [productObj, setProductObj] = useState({})
    const { name, type_of, brand, cost, time_of_use, description, image  } = productObj;
    const [reviewsArray,setReviewsArray] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
          .then((r) => r.json())
          .then((obj) => {
            setProductObj(obj)
          }
          );
          
      }, [id]);
      
     
      function addReview(reviewObj) {
          const newReviewArray = [...reviewsArray, reviewObj]
          setReviewsArray(newReviewArray)
          
      }

      const thisProduct = reviews.filter(rev => {
          
         return rev.product_id == id
       
    }) 
    const reviewArray = thisProduct.map(review => {
        return <ReviewCard key={review.id} review={review} currentUser={currentUser}/>

    })

   


      return (
        <section>
          <div>
            <br></br>
            <h1>{name}</h1>
            <img src={image} alt={name} style={{ height: 400, width:400 }}/>
            <p>{description}</p>
            <p>Made by: {brand}</p>
            <p> Stroller Type : {type_of}</p>
            <p>Cost: {cost}</p>
            <p>Use up to: {time_of_use/12} years</p>
          </div>

          <h2> Reviews </h2>
          <div>
              {reviewArray}
          </div>
          <div>
              <ReviewForm currentUser={currentUser} product={productObj} addReview={addReview}/>
          </div>
        </section>
      );
}

export default ProductPage