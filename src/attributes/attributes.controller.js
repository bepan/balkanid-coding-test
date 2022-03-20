const {attributes} = require('./attributes.data');

function get(req, res) {
  res.json({attributes})
}

module.exports = {attributes, get};