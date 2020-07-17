const Donator = require('../models/Donator');

module.exports = {
  async create(data) {
    return Donator.create(data);
  },

  findById(userId) {
    return Donator.findByPk(userId);
  },
};
