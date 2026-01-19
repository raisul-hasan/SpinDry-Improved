import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SpinDry
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
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
