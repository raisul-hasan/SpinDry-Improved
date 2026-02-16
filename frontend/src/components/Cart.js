import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items - will be managed by state/context
    { id: 1, name: 'Premium Detergent', price: 12.99, quantity: 2, image: 'https://via.placeholder.com/100x100?text=Detergent' },
    { id: 2, name: 'Fabric Softener', price: 8.99, quantity: 1, image: 'https://via.placeholder.com/100x100?text=Softener' },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 0 ? 5.00 : 0;
    return (subtotal + shipping).toFixed(2);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    alert('Checkout functionality will be implemented!');
  };

  return (
    <div className="cart">
      {/* Page Header */}
      <section className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </section>

      <section className="cart-content">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart"></i>
              <h2>Your cart is empty</h2>
              <p>Add some products to get started</p>
              <Link to="/shop" className="thm-btn cta-button">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                <h2>Items</h2>
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-quantity">
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-sidebar">
                <div className="cart-summary">
                  <h2>Order Summary</h2>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>${calculateSubtotal() > 0 ? '5.00' : '0.00'}</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <button className="thm-btn cta-button checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <Link to="/shop" className="continue-shopping">
                    <i className="fas fa-arrow-left"></i> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
