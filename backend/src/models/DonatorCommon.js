const { DataTypes, Model } = require('sequelize');

class DonatorCommon extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Donator, { foreignKey: 'type', as: 'user' });
  }
}

module.exports = DonatorCommon;
