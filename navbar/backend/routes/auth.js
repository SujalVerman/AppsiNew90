const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Add signup route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ msg: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ msg: 'User created', user });
  } catch (err) {
    res.status(500).json({ msg: 'Error creating user', err });
  }
});

// Add login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(401).json({ msg: 'Invalid credentials' });

    res.status(200).json({ msg: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ msg: 'Login error', err });
  }
});

module.exports = router;
