import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
import ReactPlayer from "react-player"


// import styled from "styled-components"

function ProductPage({reviews, currentUser, addReview, removeReview, updateReview}) {

    const params = useParams();
    const [productObj, setProductObj] = useState({})
    const [review, setReview] = useState("")
    const [showForm, setShowForm] = useState(false)
    const { name, type_of, brand, cost, time_of_use, description, image, video  } = productObj;
    
    
    const searchText = brand + " " + name
    const link = ("https://shopping.google.com/search?q=" + searchText);

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
    function handleFormClick() {
      setShowForm(showForm => !showForm)
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
            <img src={image} alt={name} style={{ height: 300, width:300 }}/>
            <p>{description}</p>
            <p>Made by: {brand}</p>
            <p> Stroller Type : {type_of}</p>
            <p>Cost: ${cost}</p>
            <p>Use up to: {time_of_use/12} years</p>
            <br></br>
            <a href={link} target="_blank"><h3 color="green">Search available retailers</h3></a>
          </div> 
          <br></br>
          <div className="video">
                    <ReactPlayer
                        width={700}
                        height={400}
                        controls={true}
                        volume={0.2}
                        playing={true}
                        muted={true}
                        url={video}
                    />
                </div>     
          <br></br>    
          <div>
            {showForm ? <button onClick={handleFormClick}>Hide Form</button> :
                        <button onClick={handleFormClick}>New Review</button>}
                       
            {showForm ?  <ReviewForm currentUser={currentUser} 
                          product={productObj} 
                          addReview={addReview}
                          handleAddReview={handleAddReview} />: null }
          </div>
          <h2> Reviews </h2>
          <div>
              {reviewArray}
          </div>
          <br></br>
          
        </section>
      );
}

export default ProductPage