const { DataTypes, Model } = require('sequelize');

class DonatorContact extends Model {
  static init(sequelize) {
    super.init({
      landline: DataTypes.STRING,
      cellphone: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Donator, { foreignKey: 'contact', as: 'phone' });
  }
}

module.exports = DonatorContact;
