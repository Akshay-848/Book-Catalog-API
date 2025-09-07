const ApiError = require('../utils/ApiError');
const { verifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return next(new ApiError(401, 'Unauthorized'));
  const token = header.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    return next();
  } catch (err) {
    return next(new ApiError(401, 'Invalid or expired token'));
  }
};
