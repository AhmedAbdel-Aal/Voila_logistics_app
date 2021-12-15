import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import MediaCard from '../components/MediaCard';


function SingleProdcutPage() {
    const {id}  = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
      const getProdcut = async () => {
        const Product = await fetchProdcut()
        setProduct(Product)
      }
  
      getProdcut()
    }, []);

    // Fetch restayrants
    const fetchProdcut = async () => {
        const res = await fetch(`http://localhost:5000/menus/${id}`)
        const data = await res.json()
        return data.data.product
    }


    return (
        <div>
        {
          (product)?
          (
            product.variants.map((v, index) => (
            <MediaCard key={index} src={product.image.src} title={v.title+ ", "+v.price + " Euro"} />
            ))
          )
          :
          (
            <h1>no product to show </h1>
          )
        }
        </div>

    )
}

export default SingleProdcutPage
