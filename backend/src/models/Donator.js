const { DataTypes, Model } = require('sequelize');

class Donator extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      address: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasOne(models.DonatorCommon, { foreignKey: 'type', as: 'user' });
    this.hasOne(models.DonatorNGO, { foreignKey: 'type', as: 'ngo' });
    this.hasOne(models.DonatorContact, { foreignKey: 'contact', as: 'contact' });
  }
}

module.exports = Donator;
