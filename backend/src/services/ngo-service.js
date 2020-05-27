const Donator = require('../models/Donator');

module.exports = {
  async getNgos() {
    return Donator.findAll({
      where: {
        member: true,
        cpf: null,
      },
    });
  },

  async findNgoById(ngoId) {
    return Donator.findByPk(ngoId);
  },
};
