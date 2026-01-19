import React, { useState } from 'react';
import './LaundryService.css';

const LaundryService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pickupDate: '',
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
  };

  return (
    <div className="laundry-service container">
      <h1>Laundry Pickup & Delivery Service</h1>
      <div className="service-info">
        <h2>How It Works</h2>
        <ol>
          <li>Schedule a pickup time</li>
          <li>We collect your laundry from your doorstep</li>
          <li>Professional cleaning and care</li>
          <li>Fresh, clean clothes delivered back to you</li>
        </ol>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <h2>Book a Service</h2>
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
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Pickup Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="wash-fold">Wash & Fold</option>
          <option value="dry-clean">Dry Cleaning</option>
          <option value="iron">Ironing</option>
          <option value="premium">Premium Service</option>
        </select>
        <button type="submit" className="btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default LaundryService;
