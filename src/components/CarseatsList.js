import React, {  } from 'react'
import {  } from 'react-redux'
import ProductCard from './ProductCard'
import Search from "./Search"
import styled from "styled-components"




function CarseatsList({products, productSearch, setProductSearch, handleAddFav, handleRemoveFav, currentUser, favorites, filter, setFilter }) {

 
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
        <Search productSearch={productSearch} setProductSearch={setProductSearch} filter={filter} setFilter={setFilter}/>
        <div>
        <h1>Car Seats</h1>
        <Wrapper>
        {carseatsArray}
        </Wrapper>
        </div>
        </>
    )
    
}

export default CarseatsList

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`