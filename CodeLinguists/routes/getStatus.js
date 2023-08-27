const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Shgjoin = require('../models/Shgjoin');

// @route   GET api/requests
//@desc     Get requests made to Shgroups for users
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const shgStatus = Shgjoin.find({ user_id: req.user.id });
    res.status(200).send(shgStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
