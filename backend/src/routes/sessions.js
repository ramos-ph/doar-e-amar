const router = require('express').Router();

const SessionController = require('../controllers/SessionController');

router.post('/', SessionController.store);

module.exports = router;
