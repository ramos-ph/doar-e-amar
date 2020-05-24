const faker = require('faker');

module.exports = {
  name: faker.name,
  email: faker.internet.email,
  password: faker.internet.password,
  avatar: faker.image.avatar,
  cpf: '00011122233',
  address: faker.address,
}
