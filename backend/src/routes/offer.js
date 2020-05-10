const router = require('express').Router();

const OfferController = require('../controllers/OfferController');

router.get('/', OfferController.index);

module.exports = router;
