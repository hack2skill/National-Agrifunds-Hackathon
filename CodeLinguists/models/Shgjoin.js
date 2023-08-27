const mongoose = require('mongoose');

const ShgjoinSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    shg_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shgroups',
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'accepted', 'dismissed'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('shgjoin', ShgjoinSchema);
