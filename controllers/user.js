const usersMock = require('../mocks/users')

const create = (req, res, next) => {
  res.json({
    email: 'alexandre.soares@hotmail.com',
    name: 'Alexandre',
    password: '123456',
    subsidiary: 'São Paulo',
  })
}

const update = (req, res, next) => {
  res.json({
    email: 'alexandre.soares@hotmail.com',
    id: 1,
    name: 'Alexandre Soares',
    subsidiary: 'São Paulo',
  })
}

const findAll = (req, res, next) => {
  const response = usersMock
  res.json(response)
}

const findById = (req, res, next) => {
  const { id } = req.params
  const response = usersMock.find(user => user.id === Number(id))
  res.json(response)
}

module.exports = {
  create,
  findById,
  findAll,
  update,
}
