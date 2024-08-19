const { body, validationResult } = require('express-validator');

const validateUserInput = [
  body('username').isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('type').isIn([0, 1]).withMessage('El tipo de usuario debe ser 0 (operador) o 1 (cliente)'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateUserLogin = [
  body('username').isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUserInput, validateUserLogin };