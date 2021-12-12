import './App.css';
import { useState, useEffect } from 'react'
import RestaurantsPage from './pages/RestaurantsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-dom'


import Header from './components/Header'
function App() {


  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path = '/' element={<RestaurantsPage/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
