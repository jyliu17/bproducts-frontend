import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
import ReactPlayer from "react-player"
import styled from "styled-components"


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
    fetch(`${process.env.REACT_APP_RAILS_URL}/products/${params.id}`)
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
    <section className="product-page"> 
      <Wrapper>
      <div>
        <br></br>
        <h1>{name}</h1>
        <img src={image} alt={name} style={{ height: 350, width:350 }}/>
        <br></br><br></br>
        <p>{description}</p>
        <p>Made by: {brand}</p>
        <p>Type: {type_of}</p>
        <p>Cost: ${cost}</p>
        <p>Usage Time: {time_of_use/12} years</p>
        <br></br>
        <a href={link} target="_blank"rel="noreferrer"><h3 color="green">Search available retailers</h3></a>
        <br></br>
        <ReactPlayer
          width={600}
          height={350}
          controls={true}
          volume={0.2}
          playing={false}
          muted={true}
          url={video}
        />
      </div>
      <Review>
        <br></br><br></br><br></br><br></br><br></br>
        <div>
          {showForm ? <button onClick={handleFormClick}>Hide Form</button> :
                      <button onClick={handleFormClick}>Add New Review</button>}
          {showForm ?  <ReviewForm currentUser={currentUser} 
                        product={productObj} 
                        addReview={addReview}
                        handleAddReview={handleAddReview} />: null }
        </div>
          <br></br>
          <h2> Reviews </h2>
          <div >
              {reviewArray}
        </div>
      </Review>
          <br></br>
          <br></br>
          <br></br>
          </Wrapper>
        </section>
      );
}

export default ProductPage

const Wrapper = styled.div `
  display: flex;
  padding: 10px;
`
const Review = styled.div `
  padding: 2%
`

