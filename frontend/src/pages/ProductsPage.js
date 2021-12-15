import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../components/Product';
function ProductsPage() {
    const [products, setProducts] = useState([])
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
        const data = await res.json()
        return data.data.products
    }
      
    return (
        <div>
        {
            products.map((product, index) => (
            <Product key={index} product={product}/>
            ))
        }
        </div>
    )
}

export default ProductsPage
