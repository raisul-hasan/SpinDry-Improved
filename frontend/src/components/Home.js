import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to SpinDry</h1>
        <p>Your one-stop solution for all laundry needs</p>
        <Link to="/laundry-service" className="cta-button">Book Laundry Service</Link>
      </section>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Laundry Pickup & Delivery</h3>
            <p>We pick up, wash, and deliver your clothes back to you</p>
            <Link to="/laundry-service">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Laundry Shop</h3>
            <p>Buy detergents, fabric softeners, and other laundry essentials</p>
            <Link to="/shop">Shop Now</Link>
          </div>
          <div className="service-card">
            <h3>Clothing Rental</h3>
            <p>Rent formal wear and casual clothing for students</p>
            <Link to="/rental">Browse Rentals</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
