const mongoose = require('mongoose');

const ShgroupsSchema = mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  representative: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
    default: 1,
  },
  memberList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  phone: {
    type: Number,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  assistance: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('shgroups', ShgroupsSchema);
