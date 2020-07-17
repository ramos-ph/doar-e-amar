const { DataTypes, Model } = require('sequelize');

class MonetaryDonation extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DOUBLE,
    }, {
      sequelize,
    });
  }
}

module.exports = MonetaryDonation;
