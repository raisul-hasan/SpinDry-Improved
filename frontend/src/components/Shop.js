import React, { useState, useEffect } from 'react';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  
  // Sample products - will be replaced with API call
  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: 'Premium Detergent', price: 12.99, category: 'Detergents' },
      { id: 2, name: 'Fabric Softener', price: 8.99, category: 'Softeners' },
      { id: 3, name: 'Stain Remover', price: 9.99, category: 'Cleaners' },
      { id: 4, name: 'Laundry Basket', price: 19.99, category: 'Accessories' },
    ];
    setProducts(sampleProducts);
  }, []);
  
  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    // Cart functionality will be implemented
  };

  return (
    <div className="shop container">
      <h1>Laundry Shop</h1>
      <p>Browse our selection of premium laundry products</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={`https://via.placeholder.com/200?text=${product.name}`} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <button className="btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
