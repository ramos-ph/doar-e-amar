const router = require('express').Router();

router.use('/sessions', require('./sessions'));
router.use('/common', require('./commonDonator'));
router.use('/categories', require('./category'));
router.use('/donations', require('./donation'));
router.use('/offers', require('./offer'));

module.exports = router;
