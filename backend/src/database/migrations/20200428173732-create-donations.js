module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('donations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STIRNG,
      allowNull: false,
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('donations'),
};
