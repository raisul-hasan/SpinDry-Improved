import React, { useState } from 'react';
import './LaundryService.css';

const LaundryService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pickupDate: '',
    pickupTime: '',
    service: 'wash-fold'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Laundry service booking:', formData);
    // API call will be added here
    alert('Booking request submitted! We will contact you shortly.');
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.9) 0%, rgba(137, 185, 46, 0.85) 100%), url(/images/backgrounds/main-slider-1-2.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="laundry-service">
      {/* Hero Section */}
      <section className="service-hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Laundry Service</h1>
            <p className="hero-subtitle">Professional pickup and delivery at your doorstep</p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Same Day Service</h3>
              <p>Quick turnaround available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Free Pickup</h3>
              <p>We come to you</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Quality Care</h3>
              <p>Professional handling</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tag"></i>
              </div>
              <h3>Best Prices</h3>
              <p>Student discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Options */}
      <section className="service-options">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="options-grid">
            <div className="option-card">
              <h3>Wash & Fold</h3>
              <p className="price">From $15</p>
              <ul>
                <li>Standard wash</li>
                <li>Professional fold</li>
                <li>Next-day delivery</li>
              </ul>
            </div>
            <div className="option-card featured">
              <div className="badge">Popular</div>
              <h3>Dry Cleaning</h3>
              <p className="price">From $25</p>
              <ul>
                <li>Delicate fabrics</li>
                <li>Professional press</li>
                <li>48-hour service</li>
              </ul>
            </div>
            <div className="option-card">
              <h3>Ironing</h3>
              <p className="price">From $10</p>
              <ul>
                <li>Professional pressing</li>
                <li>All garment types</li>
                <li>Same-day available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <div className="container">
          <div className="booking-wrapper">
            <div className="booking-info">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <span className="step-num">1</span>
                  <div>
                    <h4>Schedule Pickup</h4>
                    <p>Choose your time</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">2</span>
                  <div>
                    <h4>We Clean</h4>
                    <p>Professional care</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">3</span>
                  <div>
                    <h4>Delivery</h4>
                    <p>Fresh and clean</p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="booking-form">
              <h2>Book Service</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="wash-fold">Wash & Fold</option>
                  <option value="dry-clean">Dry Cleaning</option>
                  <option value="iron">Ironing</option>
                </select>
              </div>
              <textarea
                name="address"
                placeholder="Pickup Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <div className="form-row">
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="thm-btn cta-button">Book Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaundryService;
