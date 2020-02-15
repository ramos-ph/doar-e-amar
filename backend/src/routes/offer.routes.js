const router = require('express').Router()

const OfferController = require('../controllers/OfferController')
const AcceptanceController = require('../controllers/AcceptanceController')
const ReceivementController = require('../controllers/ReceivementController')

router.get('/', OfferController.index)
router.post('/:donationId', OfferController.store)

router.post('/:offerId/acceptance', AcceptanceController.store)

router.post('/:offerId/receivement', ReceivementController.store)

module.exports = router
