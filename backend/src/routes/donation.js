const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const DonationController = require('../controllers/DonationController');

router.post('/', upload.single('picture'), DonationController.store);
router.get('/', DonationController.show);

module.exports = router;
