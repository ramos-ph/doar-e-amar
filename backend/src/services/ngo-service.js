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

  async confirmMembership(ngoId) {
    const ngo = await Donator.findByPk(ngoId);

    ngo.member = true;

    await ngo.save();

    return ngo;
  },
};
