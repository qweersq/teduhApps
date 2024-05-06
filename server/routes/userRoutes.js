// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authenticateUser = require('../middleware/auth');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/logout', authenticateUser, userController.logoutUser);
router.get('/get-profile', authenticateUser, userController.getProfile);

// router.post('/users',authenticateUser, userController.createUser);
router.get('/users', authenticateUser, userController.getAllUsers);
router.get('/users/:id',authenticateUser, userController.getUserById);
router.put('/users/:id',authenticateUser, userController.updateUser);
router.delete('/users/:id',authenticateUser, userController.deleteUserById);

module.exports = router;
