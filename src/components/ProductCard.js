
import React, { } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useHistory } from 'react-router-dom'



function ProductCard({product}) {

    const {id, name, type_of, brand, cost, cost_range, time_of_use, description, image } = product

    return (
        <Card>
        <h3>{name}</h3>
        <img src={image} alt={name} style={{ height: 250, width:250 }} />
        <br></br>
        <LinkStyle>
        <Link style={{ textDecoration:"none" }} to={`/product/${id}`}>View Product Detail </Link>
        </LinkStyle>
        <p> Brand: {brand}</p>
        <p> Cost: ${cost}</p>
        <p> Up to: {time_of_use / 12} years</p>
        
        <br></br>
        {/* {currentUser ?
            <button onClick={handleClick}>{favs.find(f=>f.baker.id === id) ? "Remove Favorite" : "Add to My Favorites"}</button>
            : null
        } */}
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
    background-color: #fceefc;
    border: 1px solid white;
    padding: 20px;
    border-radius: 16px; 
`;