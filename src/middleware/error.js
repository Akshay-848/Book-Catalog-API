const ApiResponse = require('../utils/ApiResponse');

const notFound = (req, res, next) => {
  res.status(404).json(new ApiResponse(false, 'Route not found'));
};

const globalErrorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const payload = new ApiResponse(false, err.message || 'Internal Server Error');
  if (err.details) payload.errors = err.details;
  if (process.env.NODE_ENV !== 'production') payload.stack = err.stack;
  res.status(status).json(payload);
};

module.exports = { notFound, globalErrorHandler };
