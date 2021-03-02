import React, { useState } from "react";
import styled from "styled-components"


function FavoriteItem( { product, favId, onRemoveFromFav } ){  

  

    
    const {name, image, brand, cost, time_of_use} = product

    function handleRemove() {
        onRemoveFromFav(favId)
    }

    return(
        <Card>
            <h3>{name}</h3>
            <img src={image} alt={name} style={{ height: 250, width:250 }} />
            <h4>{brand}</h4>
            <p> Cost: ${cost}</p>
            <p> Up to: {time_of_use / 12} years</p>
            <br></br>
            <button onClick={handleRemove}>Remove Favorite</button>
        </Card>
    )
}

export default FavoriteItem;

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