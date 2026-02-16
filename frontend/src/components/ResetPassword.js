import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h1 className="hero-title">Reset Password</h1>
            <p className="hero-subtitle">We will send reset instructions to your email</p>
          </div>
        </div>
      </section>

      <section className="auth-section">
        <div className="container">
          <div className="auth-card">
            <h2>Reset Password</h2>
            {submitted ? (
              <div className="auth-success">
                If an account exists for {email}, you will receive a reset link shortly.
              </div>
            ) : (
              <form className="auth-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button type="submit" className="thm-btn cta-button">
                  Send Reset Link
                </button>
              </form>
            )}
            <div className="auth-note">
              Remembered your password? <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
