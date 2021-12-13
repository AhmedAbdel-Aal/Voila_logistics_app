import './App.css';
import { useState, useEffect } from 'react'
import RestaurantsPage from './pages/RestaurantsPage';
import SingleRestaurantPage from './pages/SingleRestaurantPage'
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'


function App() {


  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path = '/restaurants' element={<RestaurantsPage/>}/>
          <Route path = '/restaurants/:id' element={<SingleRestaurantPage/>}/>
          <Route path = '/products' element={<ProductsPage/>}/>


        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
