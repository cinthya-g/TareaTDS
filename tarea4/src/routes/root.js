const express = require('express');
const router = express.Router();
const rootController = require('../controllers/root.controller');

// GET rendered home page
router.get('', (req, res) => {
    res.render('news', 
    { title: "Searching for...",
    username: res.locals.username,
    layout: 'main-auth'});
});

// GET filtered news from keyword param
router.get('/:keyword', rootController.filterNews);

module.exports = router;