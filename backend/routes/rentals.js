const express = require('express');
const router = express.Router();
const {
  getRentals,
  getRentalById,
  createRental,
  updateRental,
  bookRental,
} = require('../controllers/rentalController');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/rentals
// @desc    Get all rental items
// @access  Public
router.get('/', getRentals);

// @route   GET /api/rentals/:id
// @desc    Get rental by ID
// @access  Public
router.get('/:id', getRentalById);

// @route   POST /api/rentals
// @desc    Create a rental item
// @access  Private/Admin
router.post('/', protect, admin, createRental);

// @route   PUT /api/rentals/:id
// @desc    Update a rental item
// @access  Private/Admin
router.put('/:id', protect, admin, updateRental);

// @route   POST /api/rentals/:id/book
// @desc    Book a rental item
// @access  Private
router.post('/:id/book', protect, bookRental);

module.exports = router;
