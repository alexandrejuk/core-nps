const revenueMock = require('../mocks/revenue')

const create = (req, res, next) => {
  res.json({
    images: [],
    name: 'AL',
  })
}

const update = (req, res, next) => {
  res.json({
    id: 1,
    name: 'AL',
  })
}

const findAll = (req, res, next) => {
  const response = revenueMock
  res.json(response)
}

const findById = (req, res, next) => {
  const { id } = req.params
  const response = revenueMock.find(revenue => revenue.id === Number(id))
  res.json(response)
}

module.exports = {
  create,
  findById,
  findAll,
  update,
}
