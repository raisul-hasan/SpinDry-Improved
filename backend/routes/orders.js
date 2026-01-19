const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
} = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post('/', protect, createOrder);

// @route   GET /api/orders
// @desc    Get all orders for logged in user
// @access  Private
router.get('/', protect, getOrders);

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', protect, getOrderById);

// @route   PUT /api/orders/:id
// @desc    Update order status
// @access  Private
router.put('/:id', protect, updateOrder);

module.exports = router;
