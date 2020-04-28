module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'donators', // tabela alvo
    'contact_id', // nome da coluna
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'donator_contacts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('donators', 'contact_id'),
};
