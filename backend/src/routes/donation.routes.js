const router = require('express').Router()

const multer = require('multer')

// controles das doações
const DonationController = require('../controllers/DonationController')
const DonationMiddleware = require('../middlewares/donation')

const multerConfig = require('../config/multer.config')

// rotas das doações
router.get('/', DonationMiddleware.index, DonationController.index)
router.post('/', multer(multerConfig).single('foto'), DonationMiddleware.store, DonationController.store)
router.get('/:donation_id', DonationController.show)
router.put('/:donation_id/update', DonationController.update)
router.delete('/:donation_id/delete', DonationController.delete)

module.exports = router
