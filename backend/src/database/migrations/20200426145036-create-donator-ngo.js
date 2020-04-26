module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('donators-ngo', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING(14),
      allowNull: false,
    },
    member: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('donators-ngo'),
};
