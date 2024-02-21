const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users');
const AccountRoles = require('./../utils/account-roles');

// Import middlewares
const { authMiddleware, roleMiddleware } = require('./../middlewares');

// Use the auth method (for logged in users)
router.use(authMiddleware);

// GET all users
router.get('', roleMiddleware([AccountRoles.ADMIN, AccountRoles.STUDENT]), usersController.getUsers);

// GET user by id
router.get('/:id', roleMiddleware([AccountRoles.ADMIN, AccountRoles.STUDENT]), usersController.getUser);

// POST user
router.post('', roleMiddleware(AccountRoles.ADMIN), usersController.postUser);

// PUT user by id
router.put('/:id', roleMiddleware(AccountRoles.ADMIN), usersController.putUser);

// DELETE user by id
router.delete('/:id', roleMiddleware(AccountRoles.ADMIN), usersController.deleteUser);

module.exports = router;