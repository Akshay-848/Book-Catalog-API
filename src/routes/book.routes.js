const router = require('express').Router();
const ctrl = require('../controllers/book.controller');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createBookRules, idRule } = require('../validators/book.validators');

router.get('/', ctrl.getAll);
router.get('/:id', idRule, validate, ctrl.getById);

router.post('/', auth, createBookRules, validate, ctrl.create);
router.put('/:id', auth, idRule.concat(createBookRules), validate, ctrl.update);
router.delete('/:id', auth, idRule, validate, ctrl.remove);

module.exports = router;
