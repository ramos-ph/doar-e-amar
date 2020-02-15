const router = require('express').Router()

const CommonUserController = require('../controllers/CommonUserController')
const NGOController = require('../controllers/NGOController')

router.post('/common', CommonUserController.store)
router.post('/ngo', NGOController.store)

module.exports = router
