const router = require('express').Router();

router.use('/common', require('./commonDonator'));

module.exports = router;
