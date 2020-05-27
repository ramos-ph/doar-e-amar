const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const DonationController = require('../controllers/DonationController');
const AcceptanceController = require('../controllers/AcceptanceController');
const ReceivementController = require('../controllers/ReceivementController');

router
  .post('/donations', upload.single('picture'), DonationController.store)
  .get('/donations', DonationController.index)
  .get('/donations/:donation_id', DonationController.show)
  .get('/users/self/donations', DonationController.index)
  .get('/users/self/donations/:donation_id', DonationController.show)
  .put('/donations/:donation_id/actions/accept', AcceptanceController.store)
  .put('/donations/:donation_id/actions/receive', ReceivementController.store);

module.exports = router;
