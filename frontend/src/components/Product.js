import React from 'react'

function Product(props) {
    const {product} = props
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default Product
