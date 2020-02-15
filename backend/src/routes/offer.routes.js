const router = require('express').Router()

const OfferController = require('../controllers/OfferController')

router.post('/:donationId', OfferController.store)

module.exports = router
