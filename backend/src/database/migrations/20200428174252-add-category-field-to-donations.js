module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'donations', // tabela alvo
    'category_id', // nome da coluna
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('donations', 'category_id'),
};
