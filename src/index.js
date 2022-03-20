const path = require('path')
const express = require('express')
const cors = require('cors')
const UsersController = require('./users/users.controller');
const AttributesController = require('./attributes/attributes.controller');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.use(cors())

app.get('/users', UsersController.get);
app.get('/attributes', AttributesController.get)

app.listen(port, () => {
  console.log(`Application running on localhost:${port}`)
})