const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('newsletter', NewsSchema);
