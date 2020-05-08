const Category = require('../models/Category');

module.exports = {
  async index(_req, res, next) {
    try {
      const categories = await Category.findAll();

      return res.status(200).json({ categories });
    } catch (err) {
      return next(err);
    }
  },
};
