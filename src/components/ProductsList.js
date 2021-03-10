import React, {  } from 'react'
import {  } from 'react-redux'
import styled from "styled-components"
import {Link} from "react-router-dom"
import ProductCard from "./ProductCard"
import Carousel from 'react-bootstrap/Carousel'



function ProductsList({products, handleAddFav, handleRemoveFav, currentUser, favorites }) {



    console.log(favorites)
    
    const strollers = products.filter(prod => {
        return prod.category.id === 1
    }) 
  
    const strollersArray = strollers.map(prod => {
        return <Carousel.Item interval={4000} key={prod.id} className="carouselitem" >
                            <ProductCard product={prod} 
                            handleAddFav={handleAddFav}
                            handleRemoveFav={handleRemoveFav} 
                            currentUser={currentUser}
                            favorites={favorites}/>
                            </Carousel.Item>
    })


    const carseats = products.filter(prod => {
        return prod.category.id === 2
    }) 
      const carseatsArray = carseats.map(prod => {
        return <Carousel.Item interval={4000} key={prod.id} className="carouselitem" >
                            <ProductCard key={prod.id} 
                            product={prod} 
                            handleAddFav={handleAddFav}
                            handleRemoveFav={handleRemoveFav} 
                            currentUser={currentUser}
                            favorites={favorites}/>
                            </Carousel.Item>
    })

    return (
        <>
         <LINK>
        <h1><Link style={{ color:"white" }} to={"/strollers"}>Strollers </Link></h1>
        </LINK>
        <Carousel>
        {strollersArray}
        </Carousel>
        <LINK>
        <h1><Link style={{ color:"white" }} to={"/carseats"}>Car Seats </Link></h1>
        </LINK>
        <Carousel>
        {carseatsArray}
        </Carousel>         
        </>
    )
    
}

export default ProductsList

const LINK = styled.div`
    text-align: center;
    background-color: black;
    border: 1px solid white;
    padding: 5px;
    padding-top: 10px;
    border-radius: 16px; 
`;