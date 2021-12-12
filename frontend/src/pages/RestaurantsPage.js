import Restaurant from '../components/Restaurant'
import { useState, useEffect } from 'react'

function RestaurantsPage(props) {
    const [restaurants, setRestaurants] = useState([])
  
    useEffect(() => {
      const getRestaurants = async () => {
        const allRestaurants = await fetchRestaurants()
        setRestaurants(allRestaurants)
      }
  
      getRestaurants()
    }, []);
  
    // Fetch restayrants
    const fetchRestaurants = async () => {
      const res = await fetch('http://localhost:5000/restaurant')
      const data = await res.json()
      console.log(data)
      return data.data
    }
  
    return (
        <div>
        {
            restaurants.map((restaurant, index) => (
            <Restaurant key={index} restaurant={restaurant}/>
            ))
        }
        </div>
    )
}

export default RestaurantsPage
