const { DataTypes, Model } = require('sequelize');

class CommonDonation extends Model {
  static init(sequelize) {
    super.init({
      picture: DataTypes.STRING,
      pickup_address: DataTypes.STRING,
      status: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}

module.exports = CommonDonation;
