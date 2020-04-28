module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'monetary_donations', // tabela alvo
    'receiver_ngo_id', // nome da coluna
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'donators',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('monetary_donations', 'receiver_ngo_id'),
};
