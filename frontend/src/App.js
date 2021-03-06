import './App.css';
import RestaurantsPage from './pages/RestaurantsPage';
import SingleRestaurantPage from './pages/SingleRestaurantPage'
import ProductsPage from './pages/ProductsPage';
import SingleProdcutPage from './pages/SingleProdcutPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'


function App() {


  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path = '/' element={<HomePage/>}/>
          <Route path = '/restaurants' element={<RestaurantsPage/>}/>
          <Route path = '/restaurants/:id' element={<SingleRestaurantPage/>}/>
          <Route path = '/products' element={<ProductsPage/>}/>
          <Route path = '/products/:id' element={<SingleProdcutPage/>}/>


        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
