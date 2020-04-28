const router = require('express').Router();

router.use('/sessions', require('./sessions'));
router.use('/common', require('./commonDonator'));

module.exports = router;
