const Rental = require('../models/Rental');

// @desc    Get all rental items
// @route   GET /api/rentals
// @access  Public
exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({ availability: true });

    res.status(200).json({
      success: true,
      count: rentals.length,
      data: rentals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get rental by ID
// @route   GET /api/rentals/:id
// @access  Public
exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);

    if (!rental) {
      return res.status(404).json({
        success: false,
        message: 'Rental item not found',
      });
    }

    res.status(200).json({
      success: true,
      data: rental,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create a rental item
// @route   POST /api/rentals
// @access  Private/Admin
exports.createRental = async (req, res) => {
  try {
    const rental = await Rental.create(req.body);

    res.status(201).json({
      success: true,
      data: rental,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update a rental item
// @route   PUT /api/rentals/:id
// @access  Private/Admin
exports.updateRental = async (req, res) => {
  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!rental) {
      return res.status(404).json({
        success: false,
        message: 'Rental item not found',
      });
    }

    res.status(200).json({
      success: true,
      data: rental,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Book a rental item
// @route   POST /api/rentals/:id/book
// @access  Private
exports.bookRental = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    const rental = await Rental.findById(req.params.id);

    if (!rental) {
      return res.status(404).json({
        success: false,
        message: 'Rental item not found',
      });
    }

    if (!rental.availability) {
      return res.status(400).json({
        success: false,
        message: 'Rental item is not available',
      });
    }

    rental.currentlyRentedTo = req.user.id;
    rental.rentalStartDate = startDate;
    rental.rentalEndDate = endDate;
    rental.availability = false;

    await rental.save();

    res.status(200).json({
      success: true,
      data: rental,
      message: 'Rental booked successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
