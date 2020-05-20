const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const NGOController = require('../controllers/NGOController');

router.post('/', upload.single('avatar'), NGOController.store);

module.exports = router;
