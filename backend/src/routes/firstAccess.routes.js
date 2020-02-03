// inicializando o roteamento
const router = require('express').Router()
const multer = require('multer')

const multerConfig = require('../config/multer.config')

// controles do usuário
const FirstAccessController = require('../controllers/FirstAccessController')
const FirstAccess = require('../middlewares/firstAccess')

// rotas públicas
router.put('/', multer(multerConfig).single('avatar'), FirstAccess.store, FirstAccessController.store)

module.exports = router
