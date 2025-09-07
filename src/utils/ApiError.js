// ApiError.js
class ApiError extends Error {
  constructor(statusCode, message, details = undefined) {
    super(message);
    this.statusCode = statusCode;
    if (details) this.details = details;
  }
}
module.exports = ApiError;
