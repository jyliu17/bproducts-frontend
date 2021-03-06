import React, { } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
// import { useHistory } from 'react-router-dom'

function ProductCard({product, currentUser, handleAddFav, handleRemoveFav, favorites}) {


    function handleClick(e){
        if (e.target.innerText === "⭐️"){
            handleRemoveFav(product)
        } else {
            handleAddFav(product)
        }  
    }

    const {id, name, brand, cost, time_of_use, image } = product

    return (
        <Card>
        <h3>{name}</h3>
        <img src={image} alt={name} style={{ height: 250, width:250 }} />
        <br></br>
        <LinkStyle>
        <Link style={{ color:"white" }} to={`/products/${id}`}>View Product Detail </Link>
        </LinkStyle>
        <p> Brand: {brand}</p>
        <p> Cost: ${cost}</p>
        <p> Up to: {time_of_use / 12} years</p>
        
        <br></br>
        {!currentUser ? null :
            <button onClick={handleClick}>{favorites.find(fav=>fav.product.id === id) ? "⭐️" : "☆"}</button> 
        
        } 
        </Card>
    )
    
}


export default ProductCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 4%;
  margin-top: 10px;
  margin-buttom: 0px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 6px;
  :hover {
      transform: scale(1.05);
      box-shadow: 2px 5px trasparent;
  }
`;

const LinkStyle = styled.div`
    background-color: #8a6083;
    background-color: gray;
    border: 1px solid white;
    padding: 20px;
    border-radius: 16px; 
`;