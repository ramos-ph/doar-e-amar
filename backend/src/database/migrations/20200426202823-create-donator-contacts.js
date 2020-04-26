module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('donator_contacts', {
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
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('donator_contacts'),
};
