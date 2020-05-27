const Donator = require('../models/Donator');

module.exports = {
  async create(data) {
    return Donator.create(data);
  },

  async findById(userId) {
    return Donator.findByPk(userId);
  },
};
