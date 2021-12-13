import React from 'react'
import Product from './Product'

function Collection(props) {
    const {collection} = props
    return (
        <div>
        {
        collection.length>0?(
            collection.map((product, index) => (
            <Product key={index} restaurant={product}/>
            ))
        )
        :
        (
            <h3>This restauraurant has empty product collection</h3>
        )
        }
        </div>
    )
}

export default Collection
