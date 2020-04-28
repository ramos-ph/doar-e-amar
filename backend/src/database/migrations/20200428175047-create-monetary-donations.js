module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('monetary_donations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    value: {
      type: Sequelize.DOUBLE(11, 2),
      allowNull: false,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('monetary_donations'),
};
