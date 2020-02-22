require('dotenv').config()
const bodyParser = require('body-parser')
const Express = require('express')
const morgan = require('morgan')

const app = Express()
const PORT = 3003 || process.env.PORT

const baseUrl = '/api'

// routes
const equipmentRoutes = require('./routes/equipment')
const issueRoutes = require('./routes/issue')
const userRoutes = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(baseUrl, equipmentRoutes)
app.use(baseUrl, issueRoutes)
app.use(baseUrl, userRoutes)

app.listen(PORT, () => console.log('nt-nps-core running...'))