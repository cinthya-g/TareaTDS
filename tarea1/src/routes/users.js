const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users');

// GET all users
router.get('', usersController.getUsers);

// GET user by id
router.get('/:id', usersController.getUser);

// POST user
router.post('', usersController.postUser);

// PUT user by id
router.put('/:id', usersController.putUser);

// DELETE user by id
router.delete('/:id', usersController.deleteUser);

module.exports = router;