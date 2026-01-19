const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a rental item name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['formal', 'casual', 'business', 'party', 'traditional', 'other'],
  },
  size: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  pricePerDay: {
    type: Number,
    required: [true, 'Please provide price per day'],
    min: 0,
  },
  securityDeposit: {
    type: Number,
    required: [true, 'Please provide security deposit'],
    min: 0,
  },
  images: [{
    type: String,
  }],
  condition: {
    type: String,
    enum: ['excellent', 'good', 'fair'],
    default: 'good',
  },
  availability: {
    type: Boolean,
    default: true,
  },
  minRentalDays: {
    type: Number,
    default: 1,
  },
  maxRentalDays: {
    type: Number,
    default: 7,
  },
  currentlyRentedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  rentalStartDate: {
    type: Date,
  },
  rentalEndDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

rentalSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Rental', rentalSchema);
