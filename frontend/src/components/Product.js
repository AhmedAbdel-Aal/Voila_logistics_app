import React from 'react'
import MediaCard from './MediaCard'
import { useNavigate } from "react-router-dom";

function Product(props) {
    const {key, product} = props
    let navigate = useNavigate();

    return (
        <div>
            <MediaCard title={product.title} src={product.image.src} 
                        onClick={()=>{navigate(`/products/${product.id}`)}}
            />
        </div>
    )
}

export default Product
