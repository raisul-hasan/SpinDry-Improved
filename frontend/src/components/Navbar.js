import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  const accountPath = isLoggedIn ? '/profile' : '/login';
  const accountLabel = isLoggedIn ? 'Account' : 'Login';

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Spin</span><span className="logo-accent">Dry</span>
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/laundry-service" className="navbar-link">Laundry Service</Link>
            </li>
            <li className="navbar-item">
              <Link to="/shop" className="navbar-link">Shop</Link>
            </li>
            <li className="navbar-item">
              <Link to="/rental" className="navbar-link">Rental</Link>
            </li>
            <li className="navbar-item">
              <Link to="/cart" className="navbar-link">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </li>
            {isLoggedIn && (
              <li className="navbar-item">
                <Link to="/orders" className="navbar-link">Orders</Link>
              </li>
            )}
            <li className="navbar-item">
              <Link to={accountPath} className="navbar-link">{accountLabel}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
