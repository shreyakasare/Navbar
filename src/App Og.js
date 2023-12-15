import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HikeCalculator from './pages/HikeCalculator';
import Context from './pages/ContextAPI/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './CartProject/Components/Product';
import Cart from './CartProject/Components/Cart';
import Dashboard from './CartProject/Components/Dashboard';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/cntxt' element={<Context />} />
          <Route exact path='/hikeCalc' element={<HikeCalculator />} />
          <Route exact path='product' element={<Product />} />

          <Route exact path='cart' element={<Cart />} />
          <Route exact path='dashboard' element={<Dashboard />} />


        </Routes>
      </Router >
    </>
  );
}

export default App; 