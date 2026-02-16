import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await authAPI.register(formData);
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.9) 0%, rgba(137, 185, 46, 0.85) 100%), url(/images/backgrounds/main-slider-1-1.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="auth-page">
      <section className="auth-hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Create Account</h1>
            <p className="hero-subtitle">Join SpinDry for faster bookings and order tracking</p>
          </div>
        </div>
      </section>

      <section className="auth-section">
        <div className="container">
          <div className="auth-card">
            <h2>Sign Up</h2>
            {error && <div className="auth-error">{error}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Pickup address"
                value={formData.address}
                onChange={handleChange}
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit" className="thm-btn cta-button" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            <div className="auth-note">
              Already have an account? <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
