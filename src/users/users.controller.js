const {users} = require('./users.data')

function get(req, res) {
  let filteredUsers = users
  const queryString = req.query
  const filters = Object.keys(queryString)
  for (let filter of filters) {
    filteredUsers = filteredUsers.filter(user => {
      return user[filter].toString().toLowerCase() === queryString[filter].toString().toLowerCase()
    })
  }
  res.json({users: filteredUsers})
}

module.exports = {get}