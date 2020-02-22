const router = require('express').Router()
const IssueController = require('../controllers/issue')

router.post('/issues', IssueController.create)
router.get('/issues', IssueController.findAll)
router.get('/issues/:id', IssueController.findById)
router.put('/issues/:id', IssueController.update)

module.exports = router
