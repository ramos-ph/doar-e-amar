const { DataTypes, Model } = require('sequelize');

class MonetaryDonation extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DOUBLE,
      receiver_ngo_id: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }
}

module.exports = MonetaryDonation;
