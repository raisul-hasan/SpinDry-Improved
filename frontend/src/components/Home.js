import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.85) 0%, rgba(137, 185, 46, 0.8) 100%), url(/images/backgrounds/main-slider-1-1.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to SpinDry</h1>
            <p className="hero-subtitle">Your one-stop solution for all laundry needs</p>
            <div className="hero-buttons">
              <Link to="/laundry-service" className="thm-btn cta-button">
                Book Laundry Service
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Quick Service</h3>
              <p>Same-day pickup and delivery available</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Quality Care</h3>
              <p>Professional handling of all garments</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-tag"></i>
              </div>
              <h3>Student Discounts</h3>
              <p>Special pricing for students</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Track Orders</h3>
              <p>Real-time order tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3>Laundry Service</h3>
              <p>Professional wash, dry, and fold service</p>
              <Link to="/laundry-service" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <h3>Laundry Products</h3>
              <p>Quality detergents and essentials</p>
              <Link to="/shop" className="service-link">
                Shop Now <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Clothing Rental</h3>
              <p>Rent formal and casual wear</p>
              <Link to="/rental" className="service-link">
                Browse Rentals <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Schedule Pickup</h3>
              <p>Book online</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>We Clean</h3>
              <p>Professional care</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Fast Delivery</h3>
              <p>Fresh clothes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Experience hassle-free laundry service</p>
            <Link to="/laundry-service" className="thm-btn cta-button">
              Book Now
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;