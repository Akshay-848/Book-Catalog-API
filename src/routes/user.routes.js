const router = require('express').Router();
const ctrl = require('../controllers/user.controller');
const validate = require('../middleware/validate');
const { registerRules, loginRules } = require('../validators/user.validators');
const { authLimiter } = require('../middleware/rateLimit');

router.post('/register', authLimiter, registerRules, validate, ctrl.register);
router.post('/login', authLimiter, loginRules, validate, ctrl.login);

module.exports = router;
