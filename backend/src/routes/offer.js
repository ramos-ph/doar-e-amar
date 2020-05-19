const router = require('express').Router();

const OfferController = require('../controllers/OfferController');

router.get('/', OfferController.index);
router.get('/:offer_id', OfferController.show);

module.exports = router;
