const router = require('express').Router()
const UserController = require('../controllers/user')

router.post('/users', UserController.create)
router.get('/users', UserController.findAll)
router.get('/users/:id', UserController.findById)
router.put('/users/:id', UserController.update)

module.exports = router
