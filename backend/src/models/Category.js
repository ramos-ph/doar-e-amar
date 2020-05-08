const { DataTypes, Model } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Donation, { foreignKey: 'category_id', as: 'category' });
  }
}

module.exports = Category;
