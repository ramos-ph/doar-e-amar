const { DataTypes, Model } = require('sequelize');

class Donator extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      address: DataTypes.STRING,
      cpf: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      member: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Donation, { foreignKey: 'donator_id', as: 'donator' });
  }
}

module.exports = Donator;
