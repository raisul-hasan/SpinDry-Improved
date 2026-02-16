import React, { useState, useEffect } from 'react';
import './Rental.css';

const Rental = () => {
  const [rentals, setRentals] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Sample rental items - will be replaced with API call
  useEffect(() => {
    const sampleRentals = [
      { id: 1, name: 'Formal Suit', price: 25, period: 'day', category: 'formal', description: 'Premium formal suit' },
      { id: 2, name: 'Party Dress', price: 20, period: 'day', category: 'formal', description: 'Elegant evening dress' },
      { id: 3, name: 'Casual Jacket', price: 15, period: 'day', category: 'casual', description: 'Comfortable casual wear' },
      { id: 4, name: 'Business Attire', price: 22, period: 'day', category: 'business', description: 'Professional business outfit' },
      { id: 5, name: 'Tuxedo', price: 35, period: 'day', category: 'formal', description: 'Classic black tuxedo' },
      { id: 6, name: 'Casual Shirt', price: 12, period: 'day', category: 'casual', description: 'Stylish casual shirt' },
    ];
    setRentals(sampleRentals);
  }, []);

  const filteredRentals = filter === 'all' 
    ? rentals 
    : rentals.filter(item => item.category === filter);

  const rentItem = (item) => {
    console.log('Renting item:', item);
    alert(`${item.name} rental request submitted!`);
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.9) 0%, rgba(137, 185, 46, 0.85) 100%), url(/images/services/Designing A Dressing Area_ - KATE LA VIE by Kate Spiers.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="rental">
      {/* Hero Section */}
      <section className="rental-hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Clothing Rental</h1>
            <p className="hero-subtitle">Premium clothing for every occasion</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="rental-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Flexible Rental</h3>
              <p>Rent by day or week</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Free Delivery</h3>
              <p>Quick pickup & return</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Quality Assured</h3>
              <p>Professionally cleaned</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tags"></i>
              </div>
              <h3>Best Prices</h3>
              <p>Affordable rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('all')}
            >
              All Items
            </button>
            <button 
              className={filter === 'formal' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('formal')}
            >
              Formal Wear
            </button>
            <button 
              className={filter === 'casual' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('casual')}
            >
              Casual Wear
            </button>
            <button 
              className={filter === 'business' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('business')}
            >
              Business Attire
            </button>
          </div>
        </div>
      </section>

      {/* Rentals Grid */}
      <section className="rentals-section">
        <div className="container">
          <div className="rentals-grid">
            {filteredRentals.map(item => (
              <div key={item.id} className="rental-card">
                <div className="rental-image">
                  <img src={`https://via.placeholder.com/300x360?text=${item.name}`} alt={item.name} />
                  <div className="rental-badge">{item.category}</div>
                </div>
                <div className="rental-content">
                  <h3>{item.name}</h3>
                  <p className="rental-description">{item.description}</p>
                  <div className="rental-footer">
                    <div className="rental-price">
                      <span className="price">${item.price}</span>
                      <span className="period">/{item.period}</span>
                    </div>
                    <button className="thm-btn cta-button" onClick={() => rentItem(item)}>
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rental;
