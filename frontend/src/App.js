import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import LaundryService from './components/LaundryService';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Rental from './components/Rental';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laundry-service" element={<LaundryService />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
