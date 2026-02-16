import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  profile: () => api.get('/auth/profile'),
};

// Order APIs
export const orderAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  updateOrder: (id, data) => api.put(`/orders/${id}`, data),
};

// Product APIs
export const productAPI = {
  getProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (productData) => api.post('/products', productData),
  updateProduct: (id, data) => api.put(`/products/${id}`, data),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

// Rental APIs
export const rentalAPI = {
  getRentals: () => api.get('/rentals'),
  getRentalById: (id) => api.get(`/rentals/${id}`),
  createRental: (rentalData) => api.post('/rentals', rentalData),
  updateRental: (id, data) => api.put(`/rentals/${id}`, data),
};

export default api;
