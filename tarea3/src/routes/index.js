const express = require('express');
const router = express.Router();

// import routes from files
const usersRoutes = require('./users');

// use json
router.use(express.json());

// import routes from endpoints
router.use('/users', usersRoutes);

router.get('/', (req, res) => {
    res.json({ message: 'Welcome! Go to the /users endpoint'})
});


module.exports = router;