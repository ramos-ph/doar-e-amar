const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const CommonDonatorController = require('../controllers/CommonDonatorController');

router.post('/', upload.single('avatar'), CommonDonatorController.store);

module.exports = router;
