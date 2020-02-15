const router = require('express').Router()

const OfferController = require('../controllers/OfferController')
const AcceptanceController = require('../controllers/AcceptanceController')

router.get('/', OfferController.index)
router.post('/:donationId', OfferController.store)

router.post('/:offerId/acceptance', AcceptanceController.store)

module.exports = router
