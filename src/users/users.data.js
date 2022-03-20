const {faker} = require('@faker-js/faker')
const {attributes} = require('../attributes/attributes.data')

const users = []
for (let i = 0; i < 20; i++) {
  users.push({
    [attributes[0].key]: faker.name.firstName(),
    [attributes[1].key]: faker.datatype.number({min: 20, max: 50}),
    [attributes[2].key]: faker.datatype.boolean(),
    [attributes[3].key]: faker.datatype.boolean(),
    [attributes[4].key]: faker.datatype.boolean(),
  })
}

module.exports = {users}