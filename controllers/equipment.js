const equipmentsMock = require('../mocks/equipments')

const create = (req, res, next) => {
  res.json({
    name: 'LIONESS',
  })
}

const update = (req, res, next) => {
  res.json({
    id: 1,
    name: 'LIONESS',
  })
}

const findAll = (req, res, next) => {
  const response = equipmentsMock
  res.json(response)
}

const findById = (req, res, next) => {
  const { id } = req.params
  const response = equipmentsMock.find(equipment => equipment.id === Number(id))
  res.json(response)
}

module.exports = {
  create,
  findById,
  findAll,
  update,
}
