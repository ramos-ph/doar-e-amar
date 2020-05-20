const { DataTypes, Model } = require('sequelize');

class Donation extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      acceptance_date: DataTypes.DATE,
      receivement_date: DataTypes.DATE,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.CommonDonation, { foreignKey: 'common_donation_id', as: 'common_donation' });
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
    this.belongsTo(models.Donator, { foreignKey: 'donator_id', as: 'donator' });
  }
}

module.exports = Donation;
