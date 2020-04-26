// inicializando o roteamento
const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/multer.config');

// controles do usuário
const CommonUserController = require('../controllers/CommonUserController');
const NGOController = require('../controllers/NGOController');

router.put('/common', multer(multerConfig).single('avatar'), CommonUserController.update);
router.put('/ngo', multer(multerConfig).single('avatar'), NGOController.update);

module.exports = router;
