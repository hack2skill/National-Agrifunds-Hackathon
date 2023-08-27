const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Loan = require('../models/Loan');

router.get('/', auth, async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.id });
    res.json(loans);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', auth, async (req, res) => {
  const { purpose, amount, assets, time, scheme } = req.body;

  try {
    let loan = await Loan.findOne({
      $and: [{ user: req.user.id }, { purpose: purpose }],
    });

    if (loan) {
      return res.status(400).json({ msg: 'Already applied for loan.' });
    }

    loan = new Loan({
      user: req.user.id,
      purpose,
      amount,
      assets,
      time,
      scheme,
    });

    await loan.save();
    res.json({ msg: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
