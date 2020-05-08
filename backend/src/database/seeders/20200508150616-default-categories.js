/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', [
    { name: 'ALIMENTOS' },
    { name: 'MOVEIS' },
    { name: 'DINHEIRO' },
    { name: 'MEDICAMENTOS' },
    { name: 'OUTROS' },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {}),
};
