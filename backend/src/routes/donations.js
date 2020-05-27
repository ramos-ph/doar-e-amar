const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const DonationController = require('../controllers/DonationController');

router
  .post('/donations', upload.single('picture'), DonationController.store)
  .get('/donations', DonationController.index)
  .get('/donations/:donation_id', DonationController.show);

module.exports = router;
