import React from 'react'
import MediaCard from './MediaCard'

function Product(props) {
    const {key, product} = props
    return (
        <div>
            <MediaCard title={product.title} src={product.image.src}/>
        </div>
    )
}

export default Product
