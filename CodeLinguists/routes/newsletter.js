const express = require('express');
const router = express.Router();
const News = require('../models/Newletter');

router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    let newsletter = await News.findOne({ email });

    //  USE NODEMAILER

    if (newsletter) {
      return res
        .status(400)
        .json({ msg: 'Already subscribed for newsletter.' });
    }

    newsletter = new News({
      email,
    });

    await newsletter.save();
    res.json({ msg: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
