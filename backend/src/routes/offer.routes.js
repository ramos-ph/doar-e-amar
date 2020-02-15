const router = require('express').Router()

const OfferController = require('../controllers/OfferController')

router.get('/', OfferController.index)
router.post('/:donationId', OfferController.store)

module.exports = router
