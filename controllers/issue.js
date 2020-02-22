const issuesMock = require('../mocks/issues')

const create = (req, res, next) => {
  res.json({
    name: 'off 0',
  })
}

const update = (req, res, next) => {
  res.json({
    id: 1,
    name: 'off 0',
    problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
    resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
  })
}

const findAll = (req, res, next) => {
  const response = issuesMock
  res.json(response)
}

const findById = (req, res, next) => {
  const { id } = req.params
  const response = issuesMock.find(issue => issue.id === Number(id))
  res.json(response)
}

module.exports = {
  create,
  findById,
  findAll,
  update,
}
