import React, {  } from 'react'
import {  } from 'react-redux'
import ProductCard from './ProductCard'
import Search from "./Search"

function ProductsList({products, productSearch, setProductSearch, handleAddFav, handleRemoveFav, currentUser, favorites, filter, setFilter }) {

    // const products = useSelector(state => state.product.products)
    const strollers = products.filter(prod => {
  
        return prod.category.id === 1
    }) 
    

    const productsArray = strollers.map(prod => {
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
        {productsArray}
        </div>
        </>
    )
    
}

export default ProductsList