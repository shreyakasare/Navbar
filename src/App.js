import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import HikeCalculator from './pages/HikeCalculator';
import Context from './pages/ContextAPI/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './CartProject/Components/Product';
import Cart from './CartProject/Components/Cart';
import Dashboard from './CartProject/Components/Dashboard';
import RootLayout from './CartProject/Components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    // <Route path='/' element={<Navbar />} >
    <Route path='/' element={<RootLayout />} >
      <Route index path='/about' element={<About />} />
      <Route path='/cntxt' element={<Context />} />
      <Route path='/hikeCalc' element={<HikeCalculator />} />
      <Route path='product' element={<Product />} />
      <Route path='cart' element={<Cart />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  ))
  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App; 