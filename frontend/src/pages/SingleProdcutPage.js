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
        
        console.log(id)
        const res = await fetch(`http://localhost:5000/menus/${id}`)
        console.log(res)
        const data = await res.json()
        console.log(data.data.product)
        return data.data.product
    }


    return (
        <div>
        {
          (product)?
          (
            // console.log(product)
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
