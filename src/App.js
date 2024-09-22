// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import LandingPage from './components/LandingPage';
import ProductsPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Provider store={store}>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
