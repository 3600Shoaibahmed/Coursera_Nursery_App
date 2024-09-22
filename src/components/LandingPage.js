// src/components/LandingPage.js
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Create this file for styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Dynamic Nursery</h1>
        <br></br>
        <p>Welcome to Dynamic Nursery, where we offer a wide selection of indoor and outdoor plants to help you create beautiful, natural spaces. From vibrant flowers to hardy shrubs and trees, our carefully chosen plants bring life to any environment. Explore our collection today and grow with us!</p>
        <Link to="/products">
          <Button type="primary" size="large">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
