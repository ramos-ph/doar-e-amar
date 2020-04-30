const Donator = require('../models/Donator');

module.exports = {
  async store(req, res) {
    const {
      name, email, password, cpf, address,
    } = req.body;
    const avatar = req.file.filename;

    try {
      const donator = await Donator.create({
        name,
        email,
        password,
        avatar,
        address,
        cpf,
      });

      return res.status(201).json(donator);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
