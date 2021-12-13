import React from 'react'

function Product(props) {
    const {key, product} = props
    return (
        <div>
            <h1>{product.title}</h1>
            <img src = {product.image.src} width={200} height={200} />
        </div>
    )
}

export default Product
