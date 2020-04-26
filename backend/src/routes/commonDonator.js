const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const DonatorCommonController = require('../controllers/DonatorCommonController');

router.post('/', upload.single('avatar'), DonatorCommonController.store);

module.exports = router;
