const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

// GET rendered login page
router.get('', (req, res) => {
    res.render('login-form', { title: 'Log In'})
});

// POST create account
router.post('', loginController.logInUser);

module.exports = router;
