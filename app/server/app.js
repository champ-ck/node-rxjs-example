const express = require('express')
const config = require('../config/config')
const app = express()
const port = config.port
const bodyParser = require('body-parser')
const routes = require('./routes')
const { httpStatusHandle } = require('./httpStatusHandle')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)
app.use(httpStatusHandle)

app.listen(port)

console.log('server start on port' + port || process.env.PORT)

module.exports = app
