module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('DonatorContact', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    landline: {
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    cellphone: {
      type: Sequelize.STRING(12),
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('DonatorContact'),
};
