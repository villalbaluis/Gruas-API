const express = require('express');
const UserController = require('../controllers/user.controller');
const { validateUserInput, validateUserLogin } = require('../middlewares/user.validation');

const router = express.Router();

router.post('/register', validateUserInput, UserController.registerUser);
router.post('/login', validateUserLogin, UserController.loginUser);
router.get('/:id', UserController.getUserById);

module.exports = router;