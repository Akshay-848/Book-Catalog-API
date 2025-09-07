const { body } = require('express-validator');

const registerRules = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name 2-80 chars'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

const loginRules = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

module.exports = { registerRules, loginRules };
