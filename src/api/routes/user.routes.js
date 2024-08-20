const express = require('express');
const UserController = require('../controllers/user.controller');
const { validateUserInput, validateUserLogin } = require('../middlewares/user.validation');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', validateUserInput, UserController.registerUser);
router.post('/login', validateUserLogin, UserController.loginUser);
router.get('/:id', authMiddleware, UserController.getUserById);

module.exports = router;