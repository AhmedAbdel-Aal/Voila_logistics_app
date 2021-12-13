import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../components/Product';
function ProductsPage() {
    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
      const getProdcuts = async () => {
        const Products = await fetchProdcuts()
        setProducts(Products)
      }
  
      getProdcuts()
    }, []);

    // Fetch restayrants
    const fetchProdcuts = async () => {
        const res = await fetch(`http://localhost:5000/menus`)
        console.log(res)
        const data = await res.json()
        console.log(data.data.products)
        return data.data.products
    }
      
    return (
        <div>
        {
            prodcuts.map((product, index) => (
            <Product key={index} product={product}/>
            ))
        }
        </div>
    )
}

export default ProductsPage
