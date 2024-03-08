const express = require('express');
const router = express.Router();

// import routes from files
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const rootRoutes = require('./root');

// Import middleware
const { authMiddleware } = require('./../middlewares');

// use json
router.use(express.json());


// import routes from endpoints
router.use('/login', loginRoutes);
router.use ('/signup', signupRoutes);
router.use('/', authMiddleware, rootRoutes);


module.exports = router;