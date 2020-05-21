const router = require('express').Router();

const ReceivementController = require('../controllers/ReceivementController');

router.put('/offers/:offer_id/receivements', ReceivementController.store);

module.exports = router;
