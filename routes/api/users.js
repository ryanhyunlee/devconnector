const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const validator = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
