const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  gender: String,
  dob: String,
  skill: String,
  group: {
    type: String,
    required: true,
  },
  shgList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shgroups',
    },
  ],
  address: {
    state: String,
    district: String,
    city: String,
    locality: String,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('user', UserSchema);
