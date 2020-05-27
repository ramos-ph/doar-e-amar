const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

const upload = multer(multerConfig);

const UserController = require('../controllers/UserController');

router
  .post('/users', upload.single('avatar'), UserController.store)
  .get('/users/:user_id', UserController.show);

module.exports = router;
