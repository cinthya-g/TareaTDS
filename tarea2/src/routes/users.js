const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users');

// Import middlewares
const { authMiddleware, roleMiddleware} = require('./../middlewares');

// Use the auth method (for logged in users)
router.use(authMiddleware);

// GET all users
router.get('', roleMiddleware(['client', 'admin']), usersController.getUsers);

// GET user by id
router.get('/:id', roleMiddleware(['client', 'admin']), usersController.getUser);

// POST user
router.post('', roleMiddleware('admin'), usersController.postUser);

// PUT user by id
router.put('/:id', roleMiddleware('admin'), usersController.putUser);

// DELETE user by id
router.delete('/:id', roleMiddleware('admin'), usersController.deleteUser);

module.exports = router;