import React, { useState, useEffect } from 'react';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Sample products - will be replaced with API call
  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: 'Premium Detergent', price: 12.99, category: 'detergents', description: 'High-quality laundry detergent' },
      { id: 2, name: 'Fabric Softener', price: 8.99, category: 'softeners', description: 'Soft and fresh fabrics' },
      { id: 3, name: 'Stain Remover', price: 9.99, category: 'cleaners', description: 'Removes tough stains' },
      { id: 4, name: 'Laundry Basket', price: 19.99, category: 'accessories', description: 'Durable laundry basket' },
      { id: 5, name: 'Delicate Wash', price: 14.99, category: 'detergents', description: 'Gentle on delicate fabrics' },
      { id: 6, name: 'Bleach Alternative', price: 11.99, category: 'cleaners', description: 'Color-safe brightener' },
    ];
    setProducts(sampleProducts);
  }, []);
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(item => item.category === filter);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    alert(`${product.name} added to cart!`);
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(135deg, rgba(24, 56, 98, 0.9) 0%, rgba(137, 185, 46, 0.85) 100%), url(/images/backgrounds/discount2.jfif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="shop">
      {/* Hero Section */}
      <section className="shop-hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Laundry Shop</h1>
            <p className="hero-subtitle">Premium laundry products delivered to your door</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('all')}
            >
              All Products
            </button>
            <button 
              className={filter === 'detergents' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('detergents')}
            >
              Detergents
            </button>
            <button 
              className={filter === 'softeners' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('softeners')}
            >
              Softeners
            </button>
            <button 
              className={filter === 'cleaners' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('cleaners')}
            >
              Cleaners
            </button>
            <button 
              className={filter === 'accessories' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setFilter('accessories')}
            >
              Accessories
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={`https://via.placeholder.com/250x280?text=${product.name}`} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <button className="thm-btn cta-button" onClick={() => addToCart(product)}>
                      <i className="fas fa-shopping-cart"></i> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
