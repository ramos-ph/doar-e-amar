module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('common_donations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pickup_address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'PENDENTE',
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('common_donations'),
};
