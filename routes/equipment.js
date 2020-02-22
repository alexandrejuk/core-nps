const router = require('express').Router()
const EquipmentController = require('../controllers/equipment')

router.post('/equipments', EquipmentController.create)
router.get('/equipments', EquipmentController.findAll)
router.get('/equipments/:id', EquipmentController.findById)
router.put('/equipments/:id', EquipmentController.update)

module.exports = router
