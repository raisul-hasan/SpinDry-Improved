import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await authAPI.login(formData);
      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token);
      }
      navigate('/profile');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.9) 0%, rgba(137, 185, 46, 0.85) 100%), url(/images/backgrounds/main-slider-1-2.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="auth-page">
      <section className="auth-hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome Back</h1>
            <p className="hero-subtitle">Log in to manage your orders and rentals</p>
          </div>
        </div>
      </section>

      <section className="auth-section">
        <div className="container">
          <div className="auth-card">
            <h2>Login</h2>
            {error && <div className="auth-error">{error}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
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

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="auth-helper">
                <Link to="/reset-password">Forgot password?</Link>
              </div>

              <button type="submit" className="thm-btn cta-button" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            <div className="auth-note">
              New here? <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
