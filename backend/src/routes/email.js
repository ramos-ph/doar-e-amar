const router = require('express').Router();

const EmailController = require('../controllers/EmailController');

router.get('/confirm', EmailController.show);

module.exports = router;
