const router = require('express').Router();

router.use('/sessions', require('./sessions'));
router.use('/donators', require('./commonDonator'));
router.use('/categories', require('./category'));
router.use('/donations', require('./donation'));
router.use('/offers', require('./offer'));
router.use('/ngos', require('./ngo'));

module.exports = router;
