const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderType: {
    type: String,
    enum: ['laundry', 'product', 'rental'],
    required: true,
  },
  items: [{
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'items.itemType',
    },
    itemType: {
      type: String,
      enum: ['Product', 'Rental'],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  laundryDetails: {
    serviceType: {
      type: String,
      enum: ['wash-fold', 'dry-clean', 'iron', 'premium'],
    },
    pickupDate: Date,
    deliveryDate: Date,
    pickupAddress: String,
    deliveryAddress: String,
    weight: Number,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'out-for-delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
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

orderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', orderSchema);
