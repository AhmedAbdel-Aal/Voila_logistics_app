import './App.css';
import { useState, useEffect } from 'react'
import RestaurantsPage from './pages/RestaurantsPage';


import Header from './components/Header'
function App() {
  const [restaurants, setRestaurants] = useState([])
  
  useEffect(() => {
    const getRestaurants = async () => {
      const allRestaurants = await fetchRestaurants()
      setRestaurants(allRestaurants)
    }

    getRestaurants()
  });

  // Fetch restayrants
  const fetchRestaurants = async () => {
    const res = await fetch('http://localhost:5000/restaurant')
    const data = await res.json()
    console.log(data)
    return data.data
  }


  return (
    <div className="container">
      <h1>
        <Header/>
        <RestaurantsPage restaurants = {restaurants}/>
      </h1>
    </div>
  );
}

export default App;
