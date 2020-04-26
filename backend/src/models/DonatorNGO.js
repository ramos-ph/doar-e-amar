const { DataTypes, Model } = require('sequelize');

class DonatorNGO extends Model {
  static init(sequelize) {
    super.init({
      cnpj: DataTypes.STRING,
      member: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Donator, { foreignKey: 'type', as: 'ngo' });
  }
}

module.exports = DonatorNGO;
