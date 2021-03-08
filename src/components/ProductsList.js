import React, {  } from 'react'
import {  } from 'react-redux'
import styled from "styled-components"
import {Link, useHistory} from "react-router-dom"
import ProductCard from "./ProductCard"
import Carousel from 'react-bootstrap/Carousel'



function ProductsList({products, handleAddFav, handleRemoveFav, currentUser, favorites }) {



  const history = useHistory()

    function onImgClick(m) {
        localStorage.setItem('id', m.id);
        // setDetailsMovieId(m.id)
        history.push(`/products/${m.id}`)
      }

    const strollers = products.filter(prod => {
        return prod.category.id === 1
    }) 
  
    const strollersArray = strollers.map(prod => {
        return <Carousel.Item interval={4000} key={prod.id} onClick={(prod) => onImgClick(prod)}
                            product={prod} 
                            handleAddFav={handleAddFav}
                            handleRemoveFav={handleRemoveFav} 
                            currentUser={currentUser}
                            favorites={favorites}>
                            <img
                            id={prod.id}
                            search_id={prod.search_id}
                            className="carousel-movie-poster"
                            src={prod.image}
                            alt={prod.name}
                            />
                            
                            </Carousel.Item>
    })


    const carseats = products.filter(prod => {
        return prod.category.id === 2
    }) 
      const carseatsArray = carseats.map(prod => {
        return <ProductCard key={prod.id} 
                            product={prod} 
                            handleAddFav={handleAddFav}
                            handleRemoveFav={handleRemoveFav} 
                            currentUser={currentUser}
                            favorites={favorites}/>
    })

    return (
        <>
        {/* <main>
            <Switch>
             
            </Switch>
        </main> */}
         <LINK>
        <h1><Link style={{ color:"white" }} to={"/strollers"}>Strollers </Link></h1>
        </LINK>
        <Carousel>
        {strollersArray}
        </Carousel>
        <LINK>
        <h1><Link style={{ color:"white" }} to={"/carseats"}>Car Seats </Link></h1>
        </LINK>
        {carseatsArray}
                 
        </>
    )
    
}

export default ProductsList

const LINK = styled.div`
    background-color: #8a6083;
    background-color: black;
    border: 1px solid white;
    padding: 20px;
    border-radius: 16px; 
`;