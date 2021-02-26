import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard"


// import styled from "styled-components"

function ProductPage({reviews}) {

    const { id } = useParams();
    const [productObj, setProductObj] = useState({})
    const { name, type_of, brand, cost, time_of_use, description, image  } = productObj;

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
          .then((r) => r.json())
          .then((obj) => {
            setProductObj(obj)
          }
          );
          
      }, [id]);
      
      

      const thisProduct = reviews.filter(rev => {
          
         return rev.product_id == id
       
    }) 

   
   
    const reviewArray = thisProduct.map(review => {
        return <ReviewCard key={review.id} review={review}/>

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
        </section>
      );
}

export default ProductPage