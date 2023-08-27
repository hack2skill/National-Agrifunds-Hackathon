const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

//Get all users with same category
router.get('/', auth, async (req, res) => {
  try {
    const loggedUser = await User.findById(req.user.id);

    const users = await User.find({ skill: loggedUser.skill }).sort({
      date: -1,
    });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
