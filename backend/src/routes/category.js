const router = require('express').Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.index);

module.exports = router;
