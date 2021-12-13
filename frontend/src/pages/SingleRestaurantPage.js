import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Collection from '../components/Collection';

function SingleRestaurantPage(props) {

    const{id} = useParams();
    const [restaurant, setRestaurants] = useState([])
    useEffect(() => {
      const getRestaurants = async () => {
        const Restaurants = await fetchRestaurant()
        setRestaurants(Restaurants)
      }
  
      getRestaurants()
    }, []);

    const [collection, setCollection] = useState([])
    useEffect(() => {
      const getCollection = async () => {
        const Collection = await fetchCollection()
        setCollection(Collection)
      }
  
      getCollection()
    }, []);

  
    // Fetch restayrants
    const fetchRestaurant = async () => {
      const res = await fetch(`http://localhost:5000/restaurant/${id}`)
      const data = await res.json()
      console.log(data.data)
      return data.data[0]
    }

    const fetchCollection = async () => {
        const res = await fetch(`http://localhost:5000/restaurant/${id}/collection`)
        console.log(res)
        const data = await res.json()
        console.log(data.data)
        return data.data
      }
  
    return (
        restaurant?(
        <div>
            <h1>
                {restaurant.r_name}
            </h1>
            <Collection collection={collection}/>
        </div>
        )
        :
        (
            <h3>loading .. </h3>
        )
    )
}

export default SingleRestaurantPage
