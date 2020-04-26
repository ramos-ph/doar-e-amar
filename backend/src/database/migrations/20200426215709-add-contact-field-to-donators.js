module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'donators', // tabela alvo
    'contactId', // nome da coluna
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'donator_contacts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('donators', 'contactId'),
};
