const router = require('express').Router();

const SessionController = require('../controllers/SessionController');

router.post('/sessions', SessionController.store);

module.exports = router;
