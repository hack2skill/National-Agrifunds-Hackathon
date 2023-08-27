const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  purpose: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  assets: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  scheme: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('loan', LoanSchema);
