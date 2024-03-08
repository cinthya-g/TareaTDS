const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup.controller');

// GET rendered signup page
router.get('', (req, res) => {
    res.render('signup-form', { title: 'Sign Up'})
});

// POST create account
router.post('', signupController.createAccount);

module.exports = router;
