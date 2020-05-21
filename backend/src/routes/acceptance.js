const router = require('express').Router();

const AcceptanceController = require('../controllers/AcceptanceController');

router.put('/offers/:offer_id/acceptances', AcceptanceController.store);

module.exports = router;
