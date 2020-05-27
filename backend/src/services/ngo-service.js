const Donator = require('../models/Donator');

module.exports = {
  async findNgoById(ngoId) {
    return Donator.findByPk(ngoId);
  },
};
