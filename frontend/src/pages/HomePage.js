import Button  from '../components/Button'
import React from 'react'
import { useNavigate } from "react-router-dom";


function HomePage() {
    let navigate = useNavigate();
    return (
        <div>
         <Button variant="contained" text="Restaurants" onClick={()=>{navigate(`/restaurants/`)}}>Restaurants</Button>
         <Button variant="contained" text="Products" onClick={()=>{navigate(`/products/`)}}>Products</Button>
        </div>
    )
}

export default HomePage
