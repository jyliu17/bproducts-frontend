import React, {  } from 'react'
import {  } from 'react-redux'
import ProductCard from './ProductCard'
import Search from "./Search"
import styled from "styled-components"



function StrollersList({products, productSearch, setProductSearch, handleAddFav, handleRemoveFav, currentUser, favorites, filter, setFilter }) {

    
    const strollers = products.filter(prod => {
        return prod.category.id === 1
    }) 
    

    const strollersArray = strollers.map(prod => {
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
        <h1>Strollers</h1>
        <Wrapper>
        {strollersArray}
        </Wrapper>
        </div>
        </>
    )
    
}

export default StrollersList

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`