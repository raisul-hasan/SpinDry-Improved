import React, { useState, useEffect } from 'react';
import './Rental.css';

const Rental = () => {
  const [rentals, setRentals] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Sample rental items - will be replaced with API call
  useEffect(() => {
    const sampleRentals = [
      { id: 1, name: 'Formal Suit', price: 25, period: 'per day', category: 'formal' },
      { id: 2, name: 'Party Dress', price: 20, period: 'per day', category: 'formal' },
      { id: 3, name: 'Casual Jacket', price: 15, period: 'per day', category: 'casual' },
      { id: 4, name: 'Business Attire', price: 22, period: 'per day', category: 'business' },
    ];
    setRentals(sampleRentals);
  }, []);

  const filteredRentals = filter === 'all' 
    ? rentals 
    : rentals.filter(item => item.category === filter);

  const rentItem = (item) => {
    console.log('Renting item:', item);
    // Rental booking logic will be implemented
  };

  return (
    <div className="rental container">
      <h1>Clothing Rental Service</h1>
      <p>Rent premium clothing for special occasions or everyday wear</p>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'formal' ? 'active' : ''} 
          onClick={() => setFilter('formal')}
        >
          Formal
        </button>
        <button 
          className={filter === 'casual' ? 'active' : ''} 
          onClick={() => setFilter('casual')}
        >
          Casual
        </button>
        <button 
          className={filter === 'business' ? 'active' : ''} 
          onClick={() => setFilter('business')}
        >
          Business
        </button>
      </div>

      <div className="rentals-grid">
        {filteredRentals.map(item => (
          <div key={item.id} className="rental-card">
            <div className="rental-image">
              <img src={`https://via.placeholder.com/200?text=${item.name}`} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="rental-price">${item.price} {item.period}</p>
            <button className="btn-primary" onClick={() => rentItem(item)}>
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rental;
