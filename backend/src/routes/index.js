const router = require('express').Router();

router.use('/sessions', require('./sessions'));
router.use('/common', require('./commonDonator'));
router.use('/categories', require('./category'));
router.use('/donations', require('./donation'));

module.exports = router;
