import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"


// import styled from "styled-components"

function ProductPage({reviews, currentUser, addReview, removeReview, updateReview}) {

    const params = useParams();
    const [productObj, setProductObj] = useState({})
    const [review, setReview] = useState("")
    const { name, type_of, brand, cost, time_of_use, description, image  } = productObj;
    

    useEffect(() => {
        fetch(`http://localhost:3000/products/${params.id}`)
          .then((r) => r.json())
          .then((obj) => {
            setProductObj(obj)
          }
          );
          
      }, [params.id]);
      
     
     function handleAddReview(newReviewArray) {
         addReview(newReviewArray)
         setReview(newReviewArray)
     }
     function handleDeleteReview(newReviewArray) {
        removeReview(newReviewArray)
        setReview(newReviewArray)
     }
     function handleUpdateReview(newReviewArray) {
        updateReview(newReviewArray)
        setReview(newReviewArray)
     }
     

      const thisProduct = reviews.filter(rev => {
          
         return rev.product.id == params.id
       
    }) 
    const reviewArray = thisProduct.map(review => {
        return <ReviewCard key={review.id} review={review} currentUser={currentUser} 
                            handleDeleteReview={handleDeleteReview} handleUpdateReview={handleUpdateReview}/>

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
            <a href="google.com/search?q=">link text</a>
          </div>

          <h2> Reviews </h2>
          <div>
              {reviewArray}
          </div>
          <div>
              <ReviewForm currentUser={currentUser} 
                          product={productObj} 
                          addReview={addReview}
                          handleAddReview={handleAddReview}/>
          </div>
        </section>
      );
}

export default ProductPage