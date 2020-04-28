module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'donations', // tabela alvo
    'monetary_donation_id', // nome da coluna
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'monetary_donations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('donations', 'monetary_donation_id'),
};
