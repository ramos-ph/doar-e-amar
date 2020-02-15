const router = require('express').Router()

const multer = require('multer')
const multerConfig = require('../config/multer.config')

// controles das doações
const DonationController = require('../controllers/DonationController')

// rotas das doações
router.get('/', DonationController.index)
router.post('/', multer(multerConfig).single('foto'), DonationController.store)
router.get('/:donationId', DonationController.show)
router.delete('/:donationId', DonationController.delete)

module.exports = router
