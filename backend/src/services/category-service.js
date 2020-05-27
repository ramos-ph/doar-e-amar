const Category = require('../models/Category');

module.exports = {
  async listCategories() {
    return Category.findAll();
  },
};
