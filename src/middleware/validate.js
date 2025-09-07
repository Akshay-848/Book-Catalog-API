const { validationResult } = require('express-validator');
const ApiError = require('../utils/ApiError');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return next(new ApiError(400, 'Validation error', errors.array()));
};

module.exports = validate;
