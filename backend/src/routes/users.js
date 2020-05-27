const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const UserController = require('../controllers/UserController');
const DonationController = require('../controllers/DonationController');

router
  .post('/users', upload.single('avatar'), UserController.store)
  .get('/users/:user_id', UserController.show)
  .get('/users/self/donations', DonationController.index)
  .get('/users/self/donations/:donation_id', DonationController.show);

module.exports = router;
