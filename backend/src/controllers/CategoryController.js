const Category = require('../services/category-service');

module.exports = {
  async index(_req, res, next) {
    try {
      const categories = await Category.listCategories();

      return res.status(200).send(categories);
    } catch (err) {
      return next(err);
    }
  },
};
