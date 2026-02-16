import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { orderAPI } from '../services/api';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderAPI.getOrders();
        setOrders(response?.data || []);
      } catch (err) {
        setError('Please log in to view your orders.');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <section className="orders-header">
        <div className="container">
          <h1>My Orders</h1>
          <p>Track your laundry, shop, and rental orders</p>
        </div>
      </section>

      <section className="orders-content">
        <div className="container">
          {error ? (
            <div className="orders-empty">
              <p>{error}</p>
              <Link to="/login" className="thm-btn cta-button">Log In</Link>
            </div>
          ) : orders.length === 0 ? (
            <div className="orders-empty">
              <p>No orders yet. Start with a service or product.</p>
              <div className="orders-actions">
                <Link to="/laundry-service" className="thm-btn cta-button">Book Laundry</Link>
                <Link to="/shop" className="thm-btn cta-button">Shop Products</Link>
              </div>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id || order.id} className="order-card">
                  <div className="order-header">
                    <h3>Order #{order._id?.slice(-6) || order.id}</h3>
                    <span className={`order-status ${order.status || 'pending'}`}>
                      {order.status || 'pending'}
                    </span>
                  </div>
                  <div className="order-details">
                    <div>
                      <span className="label">Type</span>
                      <span className="value">{order.orderType || 'Laundry'}</span>
                    </div>
                    <div>
                      <span className="label">Total</span>
                      <span className="value">${order.totalAmount || '0.00'}</span>
                    </div>
                    <div>
                      <span className="label">Date</span>
                      <span className="value">{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}</span>
                    </div>
                  </div>
                  <button className="thm-btn cta-button">View Details</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Orders;
