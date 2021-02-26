import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function ProductsList(params) {

    const products = useSelector(state => state.product.products)
    const strollers = products.filter(prod => {
      console.log(prod.category.id)  
        return prod.category.id == 1
    }) 
    

    const productsArray = strollers.map(prod => {
        return <ProductCard key={prod.id} product={prod}/>
    })

    return (
        <div>
        {productsArray}
        </div>
    )
    
}

export default ProductsList