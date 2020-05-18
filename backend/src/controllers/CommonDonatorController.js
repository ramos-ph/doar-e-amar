const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');

module.exports = {
  async store(req, res) {
    const {
      name, email, password, cpf, address,
    } = req.body;
    const avatar = req.file.filename;

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const donator = await Donator.create({
        name,
        email,
        password: hashedPassword,
        avatar,
        address,
        cpf,
      });

      return res.status(201).send(donator);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
