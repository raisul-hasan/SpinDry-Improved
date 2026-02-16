import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h3>SpinDry</h3>
            <p>Professional laundry service for students</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>info@spindry.com</p>
            <p>+1 234 567 8900</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SpinDry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
