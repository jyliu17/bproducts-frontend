import React, {  } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"


function FavoriteItem( { product, favId, onRemoveFromFav } ){  

  

    
    const {id, name, image, brand, cost, time_of_use} = product

    function handleRemove() {
        onRemoveFromFav(favId)
    }

    return(
        <Card>
            <h3>{name}</h3>
            <img src={image} alt={name} style={{ height: 250, width:250 }} />
            <LinkStyle>
            <Link style={{ color:"white" }} to={`/products/${id}`}>View Product Detail </Link>
            </LinkStyle>
            <h4>{brand}</h4>
            <p> Cost: ${cost}</p>
            <p> Up to: {time_of_use / 12} years</p>
            <br></br>
            <Button onClick={handleRemove}>Remove Favorite</Button>
        </Card>
    )
}

export default FavoriteItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  margin: 4%;
  margin-top: 20px;
  margin-buttom: 0px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
      transform: scale(1.05);
      box-shadow: 2px 5px grey;
  }
`;


const LinkStyle = styled.div`
    background-color: #8a6083;
    background-color: gray;
    border: 1px solid white;
    padding: 20px;
    border-radius: 16px; 
`;