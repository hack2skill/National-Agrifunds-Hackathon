const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
//@desc     Register a user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('skill', 'Please add skill').not().isEmpty(),
    check('district', 'Please add district').not().isEmpty(),
    check('state', 'Please add state').not().isEmpty(),
    check('group', 'Please add group').not().isEmpty(),
    check('phone', 'Please enter a phone number with 10 digits').isLength({
      min: 10,
      max: 10,
    }),
    check(
      'password',
      'Please enter a password with 4 or more characters'
    ).isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, skill, district, state, group, password } = req.body;

    try {
      let user = await User.findOne({ phone });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        phone,
        skill,
        group,
        address: {
          state,
          district,
        },
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.put('/:id', async (req, res) => {
  const {
    name,
    gender,
    phoneNo,
    email,
    dob,
    age,
    state,
    district,
    city,
    locality,
    skill,
    group,
    pin,
  } = req.body;

  let address = {};
  if (state) address.state = state;
  if (district) address.district = district;
  if (city) address.city = city;
  if (locality) address.locality = locality;
  //Build Contact object
  const userFields = {};
  if (name) userFields.name = name;
  if (gender) userFields.gender = gender;
  if (phoneNo) userFields.phone = phoneNo;
  if (email) userFields.email = email;
  if (dob) userFields.dob = dob;
  if (age) userFields.age = age;
  if (address) userFields.address = address;
  if (skill) userFields.skill = skill;
  if (group) userFields.group = group;
  if (pin) {
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(pin, salt);
  }

  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
