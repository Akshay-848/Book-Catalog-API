const { body, param } = require('express-validator');

const createBookRules = [
  body('title').trim().notEmpty(),
  body('author').trim().notEmpty(),
  body('genre').trim().notEmpty(),
  body('price').isFloat({ min: 0 }),
  body('inStock').optional().isBoolean()
];

const idRule = [param('id').isMongoId().withMessage('Invalid book id')];

module.exports = { createBookRules, idRule };
