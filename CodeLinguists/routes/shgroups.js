const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Shgroup = require('../models/Shgroups');
const User = require('../models/User');

router.get('/', auth, async (req, res) => {
  try {
    const loggedUser = await User.findById(req.user.id);
    const groups = await Shgroup.find({
      $and: [{ business: loggedUser.skill }],
    }).sort({
      date: -1,
    });
    res.json(groups);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', auth, async (req, res) => {
  const { name, representative, members, phone, business, assistance } =
    req.body;

  try {
    let shgroup = await Shgroup.findOne({ name });

    if (shgroup) {
      return res.status(400).json({ msg: 'Already applied for shgroup.' });
    }

    shgroup = new Shgroup({
      name,
      representative,
      members,
      phone,
      business,
      assistance,
      user: req.user.id,
    });

    // console.log(shgroup.user, req.user.id);
    let user = await User.findById(req.user.id);

    await shgroup.save();
    await user.save();
    res.json({ msg: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
