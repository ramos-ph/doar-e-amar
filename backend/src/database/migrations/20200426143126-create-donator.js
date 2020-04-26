module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Donator', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    contact: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'DonatorContact',
        key: 'id',
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING(11),
      allowNull: true,
    },
    cnpj: {
      type: Sequelize.STRING(14),
      allowNull: true,
    },
    member: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Donator'),
};
