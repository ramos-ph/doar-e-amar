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
    this.hasOne(models.Donator, { foreignKey: 'contact_id', as: 'contact' });
  }
}

module.exports = DonatorContact;
